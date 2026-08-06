"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AdminUpdates() {
  const supabase = createClient();
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", content: "" });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    loadUpdates();
  }, []);

  async function loadUpdates() {
    setLoading(true);
    const { data, error } = await supabase
      .from("company_updates")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setUpdates(data);
    }
    setLoading(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function startEdit(update) {
    setEditingId(update.id);
    setForm({ title: update.title, content: update.content });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ title: "", content: "" });
    setImageFile(null);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.title || !form.content) {
      setError("Title and content are required.");
      return;
    }

    setUploading(true);

    let imageUrl = null;

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `update-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("portfolio-images")
        .upload(fileName, imageFile);

      if (uploadError) {
        setError(`Image upload failed: ${uploadError.message}`);
        setUploading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    const payload = { title: form.title, content: form.content };
    if (imageUrl) payload.image_url = imageUrl;

    let saveError;

    if (editingId) {
      const { error } = await supabase.from("company_updates").update(payload).eq("id", editingId);
      saveError = error;
    } else {
      const { error } = await supabase.from("company_updates").insert(payload);
      saveError = error;
    }

    setUploading(false);

    if (saveError) {
      setError(saveError.message);
    } else {
      cancelEdit();
      loadUpdates();
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this update?")) return;
    const { error } = await supabase.from("company_updates").delete().eq("id", id);
    if (error) {
      setError(error.message);
    } else {
      loadUpdates();
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Company Updates</h1>
          <a href="/admin" className="text-sm text-purple-600 underline">← Back to dashboard</a>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">{editingId ? "Edit Update" : "Publish New Update"}</h2>
            {editingId && <button onClick={cancelEdit} className="text-xs text-slate-500 underline">Cancel edit</button>}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Title</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Content</label>
              <textarea name="content" value={form.content} onChange={handleChange} rows={4} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Image (optional) {editingId && <span className="text-xs text-slate-400">(leave blank to keep current)</span>}
              </label>
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="mt-1 w-full text-sm" />
            </div>

            {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

            <button type="submit" disabled={uploading} className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60">
              {uploading ? "Saving..." : editingId ? "Save Changes" : "Publish Update"}
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-slate-900">Published Updates</h2>
          {loading ? (
            <p className="mt-4 text-sm text-slate-500">Loading...</p>
          ) : updates.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">No updates yet.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {updates.map((u) => (
                <div key={u.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  {u.image_url && <img src={u.image_url} alt={u.title} className="h-32 w-full rounded-lg object-cover" />}
                  <p className="mt-3 font-semibold text-slate-900">{u.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{u.content}</p>
                  <div className="mt-3 flex gap-3">
                    <button onClick={() => startEdit(u)} className="text-xs text-blue-600 underline">Edit</button>
                    <button onClick={() => handleDelete(u.id)} className="text-xs text-red-500 underline">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
