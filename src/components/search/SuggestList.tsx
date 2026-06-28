import type { SuggestItem } from "../../hooks/useSuggest";

type Props = {
  items: SuggestItem[];
  loading: boolean;
  error: string | null;
  onSelect: (item: SuggestItem) => void;
};

export function SuggestList({
  items,
  loading,
  error,
  onSelect,
}: Props) {
  if (loading) return <div>検索中...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (items.length === 0) return <div>候補なし</div>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        background: "#fff",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
          }}
        >
          <div>{item.name}</div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            {item.operator}
          </div>
        </div>
      ))}
    </div>
  );
}