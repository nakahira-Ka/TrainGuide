type Props = {
  lineName?: string;
};

const lineColors: Record<string, string> = {
  "御堂筋線": "#e60012",
  "JR": "#0072bc",
  "JR京都線": "#0072bc",
  "JR神戸線": "#0072bc",
  "阪急": "#8a2be2",
  "阪急京都線": "#8a2be2",
  "阪神": "#c7000b",
  "近鉄": "#a0522d",
  "地下鉄": "#444",
};

export function LineBadge({ lineName }: Props) {
  if (!lineName) {
    return (
      <span
        style={{
          fontSize: "12px",
          color: "#666",
        }}
      >
        路線不明
      </span>
    );
  }

  const color =
    Object.entries(lineColors).find(([key]) =>
      lineName.includes(key)
    )?.[1] || "#999";

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        background: color,
        color: "white",
        fontWeight: 600,
      }}
    >
      {lineName}
    </span>
  );
}