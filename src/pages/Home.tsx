import { useState } from "react";
import type { Station } from "../types/station";
import { StationInput } from "../components/search/StationInput";
import { useRouteSearch } from "../hooks/useRouteSearch";
import { RouteResult } from "../components/route/RouteResult";

/* ホーム画面 */
export default function Home() {
  const [from, setFrom] = useState<Station | null>(null);
  const [to, setTo] = useState<Station | null>(null);

  const { route, loading, error, search } = useRouteSearch();

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 20,
      }}
    >
      {/* タイトル */}
      <h1 style={{ marginBottom: 20 }}>Train Guide</h1>

      {/* 入力エリア */}
      <div style={{ marginBottom: 12 }}>
        <StationInput
          label="出発"
          value={from}
          onSelect={setFrom}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <StationInput
          label="到着"
          value={to}
          onSelect={setTo}
        />
      </div>

      {/* ボタン */}
      <button
        onClick={() => {
          if (from && to) search(from, to);
        }}
        style={{
          width: "100%",
          padding: 10,
          background: "#2196f3",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        検索
      </button>

      {/* ローディング */}
      {loading && (
        <p style={{ marginTop: 12 }}>検索中...</p>
      )}

      {/* エラー */}
      {error && (
        <p style={{ marginTop: 12, color: "red" }}>
          {error}
        </p>
      )}

      {/* 結果 */}
      {route && (
        <div style={{ marginTop: 20 }}>
          <RouteResult result={route} />
        </div>
      )}
    </div>
  );
}