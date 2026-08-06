export async function POST(request) {
  const { password } = await request.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }

  const response = Response.json({ success: true });
  response.headers.set(
    "Set-Cookie",
    `admin_session=${process.env.ADMIN_SESSION_SECRET}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
  );
  return response;
}
