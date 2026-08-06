// app/careers/signin/page.jsx

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">Candidate sign in</h1>
        <p className="mt-3 text-slate-600">
          Candidate accounts are coming soon. For now, submit your CV directly and we'll keep your details on file.
        </p>
        <a href="/careers/apply" className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition">Submit Your CV →</a>
        <p className="mt-6 text-sm text-slate-400">
          <a href="/careers" className="text-purple-600 underline">Back to careers</a>
        </p>
      </div>
    </div>
  );
}
