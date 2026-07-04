const BASE_URL = "https://api.transit.ls8h.com";

/* 経路検索 */
export async function getRoute(from: string, to: string) {
  const params = new URLSearchParams({
    from,
    to,
  });

  const res = await fetch(
    `${BASE_URL}/api/v1/plan?${params.toString()}`
  );

  if (!res.ok) {
    throw new Error(`経路取得失敗: ${res.status}`);
  }

  return res.json();
}