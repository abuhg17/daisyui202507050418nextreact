import axios from "axios";

export async function GET(request, { params }) {
  const { bvid } = params;

  if (!bvid) {
    return new Response(JSON.stringify({ error: "請提供 bvid 參數" }), {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  try {
    const res = await axios.get(
      "https://api.bilibili.com/x/web-interface/view",
      {
        params: { bvid },
      }
    );

    const { pic, title, owner, stat, pages } = res.data.data;
    const raw = res.data.data;

    const newdata = {};
    for (const key in raw) {
      if (typeof raw[key] !== "object") {
        newdata[key] = raw[key];
      }
    }

    return new Response(
      JSON.stringify(
        { pic, title, owner, stat, data: newdata, pages },
        null,
        2
      ),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify(
        {
          error: "無法取得 Bilibili 資料",
          message: error.message,
          status: error.response?.status,
          response: error.response?.data,
        },
        null,
        2
      ),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }
}
