export function formatLineName(feedName: string) {
  if (!feedName) return "";

  // 大阪メトロ系の簡易整形
  if (feedName.includes("大阪メトロ")) {
    if (feedName.includes("御堂筋")) return "御堂筋線";
    if (feedName.includes("谷町")) return "谷町線";
    if (feedName.includes("堺筋")) return "堺筋線";
  }

  // JRなどはそのまま短縮
  if (feedName.includes("JR")) {
    return feedName.replace("JR西日本", "JR").replace("JR東海", "JR");
  }

  return feedName;
}