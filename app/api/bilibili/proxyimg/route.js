import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "請提供 url 參數" }), {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  try {
    const response = await axios.get(url, {
      responseType: "stream",
      headers: {
        Referer: "https://www.bilibili.com/",
        // 你也可以加 User-Agent 這裡視需要
      },
    });

    const headers = new Headers();
    headers.set(
      "Content-Type",
      response.headers["content-type"] || "application/octet-stream"
    );
    headers.set("Cache-Control", "public, max-age=86400");

    return new Response(response.data, {
      status: 200,
      headers,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "圖片代理失敗", message: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }
}
