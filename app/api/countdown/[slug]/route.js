export async function GET(request, context) {
  const { slug } = context.params;

  if (!slug || slug.length !== 12) {
    return new Response(
      JSON.stringify({ error: "Invalid slug. Format should be: YYYYMMDDHHMM" }),
      { status: 400 }
    );
  }

  const slugISO =
    `${slug.slice(0, 4)}-${slug.slice(4, 6)}-${slug.slice(6, 8)}T` +
    `${slug.slice(8, 10)}:${slug.slice(10, 12)}:00+08:00`;

  const now = new Date();
  const next = new Date(slugISO);
  const diffMs = next - now;
  const expired = diffMs < 0;

  let diffDay = 0,
    diffHour = 0,
    diffMinute = 0,
    diffSecond = 0;

  if (!expired) {
    let remaining = Math.floor(diffMs / 1000);
    diffDay = Math.floor(remaining / 86400);
    remaining -= diffDay * 86400;

    diffHour = Math.floor(remaining / 3600);
    remaining -= diffHour * 3600;

    diffMinute = Math.floor(remaining / 60);
    diffSecond = remaining % 60;
  }

  return new Response(
    JSON.stringify({
      slug,
      now: now.toISOString(),
      slugISO,
      next: next.toISOString(),
      diffMs,
      expired,
      diffDay,
      diffHour,
      diffMinute,
      diffSecond,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
}
