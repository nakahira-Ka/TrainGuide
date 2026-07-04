/* 複数路線を抽出する */
function extractLines(stationId: string): string[] {
  if (!stationId) return [];

  const matches = [...stationId.matchAll(/-([^-\s]+線)-/g)];
  return matches.map((m) => m[1]);
}

/* 路線名フォーマット */
export function formatLineName(
  stationId: string,
  operator?: string
): string {
  // JRはそのまま
  if (operator?.includes("JR")) {
    return operator;
  }

  // stationIdから路線を全部抽出
  const lines = extractLines(stationId);

  if (lines.length > 0) {
    return `${lines.join(" / ")}（${operator ?? ""}）`;
  }

  // フォールバック
  return operator ?? "";
}