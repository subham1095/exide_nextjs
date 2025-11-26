export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch(
      "https://exide-shop-backend.onrender.com/api/book-installation",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ message: "Server error", error }, { status: 500 });
  }
}
