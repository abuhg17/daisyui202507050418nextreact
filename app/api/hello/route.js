// app/api/hello/route.js
export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello World.",
      message2: "こんにちは、世界。",
      message3: "世界，你好!",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}
