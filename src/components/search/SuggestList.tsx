import type { Station } from "../../types/station";
import { formatLineName } from "../../utils/formatLineName";

/* Props定義 */
type Props = {
  items: Station[];
  loading: boolean;
  error: string | null;
  onSelect: (station: Station) => void;
};

/* 駅サジェスト一覧 */
export function SuggestList({
  items,
  loading,
  error,
  onSelect,
}: Props) {
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!items.length) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        border: "1px solid #ddd",
        background: "#fff",
        zIndex: 9999,
        maxHeight: 300,
        overflowY: "auto",
      }}
    >
      {items.map((station) => (
        <div
          key={station.id}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onSelect(station)}
          style={{
            padding: "8px 10px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
          }}
        >
          {/* 駅名 */}
          <div>{station.name}</div>

          {/* 路線情報 */}
          <div style={{ fontSize: 12, color: "#666" }}>
            {formatLineName(station.feedName ?? "")}
          </div>
        </div>
      ))}
    </div>
  );
}