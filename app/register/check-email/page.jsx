export default function CheckEmail() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center">
      <div className="max-w-md rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">Check your email</h1>
        <p className="mt-4 text-slate-600">
          Welcome to VEWZA Digital! We've sent a verification email. Please verify your email address before signing in.
        </p>
        <a href="/signin" className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition">Go to Sign In</a>
      </div>
    </div>
  );
}
