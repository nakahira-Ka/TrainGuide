import type { Station } from "../../types/station";
import { formatLineName } from "../../utils/formatLineName";
import {groupStations} from"../../utils/groupStations"
/* Props定義 */
type Props = {
  items: Station[];
  loading: boolean;
  error: string | null;
  onSelect: (station: Station) => void;
};

/* 駅サジェスト一覧 */
export function SuggestList({ items, loading, error, onSelect }: Props) {
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!items.length) return null;
  
  const grouped = items.reduce((acc, cur) => {
    if (!acc[cur.name]) acc[cur.name] = [];
    acc[cur.name].push(cur);
    return acc;
  }, {} as Record<string, Station[]>);
  return (
    <div
    style={{
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: "#fff",
      border: "1px solid #ddd",
      zIndex: 9999,
      maxHeight: 300,
      overflowY: "auto",
    }}
    >
      {Object.entries(grouped).map(([name, stations]) => (
        <div key={name}>
          {/* 駅名 */}
          <div style={{ padding: 8, fontWeight: "bold" }}>
            {name}
          </div>

          {/* 路線一覧 */}
          {stations.map((station) => (
            <div
            key={station.id}
            onClick={() => onSelect(station)}
            style={{
              padding: "4px 12px",
              cursor: "pointer",
              fontSize: 12,
              color: "#666",
            }}
            >
              {formatLineName(station.id, station.operator)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}