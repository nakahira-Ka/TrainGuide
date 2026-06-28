import { useState } from "react";
import type { Station } from "../types/station";
import { StationInput } from "../components/search/StationInput";
import { useRouteSearch } from "../hooks/useRouteSearch";
import { RouteResult } from "../components/route/RouteResult";
export default function Home() {
  const [from, setFrom] = useState<Station | null>(null);
  const [to, setTo] = useState<Station | null>(null);

  const { route, loading, error, search } =
    useRouteSearch();

  return (
    <div style={{ padding: 20 }}>
      <h1>Train Guide</h1>

      <StationInput
        label="出発"
        value={from}
        onSelect={setFrom}
      />

      <div style={{ height: 10 }} />

      <StationInput
        label="到着"
        value={to}
        onSelect={setTo}
      />

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => {
            if (from && to) {
              search(from, to);
            }
          }}
        >
          検索
        </button>
      </div>

      {/* 状態表示 */}
      <div style={{ marginTop: 20 }}>
        {loading && <p>検索中...</p>}

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}
      </div>

      {/* 結果表示（簡易） */}
      {route && (
        <div style={{ marginTop: 20 }}>
          <RouteResult result={route} />
        </div>
      )}
    </div>
  );
}