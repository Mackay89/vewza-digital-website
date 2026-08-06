"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AdminPortfolio() {
  const supabase = createClient();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    category: "",
    client: "",
    description: "",
    tech: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setProjects(data);
    }
    setLoading(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function startEdit(project) {
    setEditingId(project.id);
    setForm({
      title: project.title || "",
      category: project.category || "",
      client: project.client || "",
      description: project.description || "",
      tech: (project.tech || []).join(", "),
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ title: "", category: "", client: "", description: "", tech: "" });
    setImageFile(null);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.title || !form.category) {
      setError("Title and category are required.");
      return;
    }

    setUploading(true);

    let imageUrl = null;

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

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

    const techArray = form.tech
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title: form.title,
      category: form.category,
      client: form.client,
      description: form.description,
      tech: techArray,
    };

    if (imageUrl) {
      payload.image_url = imageUrl;
    }

    let saveError;

    if (editingId) {
      const { error } = await supabase
        .from("portfolio_projects")
        .update(payload)
        .eq("id", editingId);
      saveError = error;
    } else {
      const { error } = await supabase.from("portfolio_projects").insert(payload);
      saveError = error;
    }

    setUploading(false);

    if (saveError) {
      setError(saveError.message);
    } else {
      cancelEdit();
      loadProjects();
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this project?")) return;
    const { error } = await supabase.from("portfolio_projects").delete().eq("id", id);
    if (error) {
      setError(error.message);
    } else {
      loadProjects();
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Manage Portfolio</h1>
          <a href="/admin" className="text-sm text-purple-600 underline">← Back to dashboard</a>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">
              {editingId ? "Edit Project" : "Add New Project"}
            </h2>
            {editingId && (
              <button onClick={cancelEdit} className="text-xs text-slate-500 underline">
                Cancel edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Title</label>
                <input type="text" name="title" value={form.title} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Category</label>
                <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="e.g. Business Websites" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Client</label>
              <input type="text" name="client" value={form.client} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Technologies (comma-separated)</label>
              <input type="text" name="tech" value={form.tech} onChange={handleChange} placeholder="Next.js, Tailwind CSS, Node.js" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Project Image {editingId && <span className="text-xs text-slate-400">(leave blank to keep current image)</span>}
              </label>
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="mt-1 w-full text-sm" />
            </div>

            {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

            <button type="submit" disabled={uploading} className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60">
              {uploading ? "Saving..." : editingId ? "Save Changes" : "Add Project"}
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-slate-900">Current Projects</h2>
          {loading ? (
            <p className="mt-4 text-sm text-slate-500">Loading...</p>
          ) : projects.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">No projects yet. Add one above.</p>
          ) : (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <div key={p.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  {p.image_url && (
                    <img src={p.image_url} alt={p.title} className="h-32 w-full rounded-lg object-cover" />
                  )}
                  <p className="mt-3 font-semibold text-slate-900">{p.title}</p>
                  <p className="text-xs text-purple-600">{p.category}</p>
                  <p className="mt-1 text-xs text-slate-500">{p.client}</p>
                  <div className="mt-3 flex gap-3">
                    <button onClick={() => startEdit(p)} className="text-xs text-blue-600 underline">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="text-xs text-red-500 underline">
                      Delete
                    </button>
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
