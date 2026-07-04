const BASE_URL = "https://api.transit.ls8h.com";

/* 駅サジェスト取得 */
export async function searchStation(keyword: string) {
  if (!keyword) return { stations: [] };

  const res = await fetch(
    `${BASE_URL}/api/v1/locations/suggest?q=${encodeURIComponent(keyword)}`
  );

  if (!res.ok) {
    throw new Error("駅検索に失敗しました");
  }

  const data = await res.json();

  console.log("API raw response:", data);

  return data; // ← ここ超重要
}