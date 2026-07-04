import { RouteSegment } from "./RouteSegment";

type Props = {
  result: any;
};

/* 経路結果表示 */
export function RouteResult({ result }: Props) {
  if (!result || !Array.isArray(result)) return null;

  return (
    <div style={{ marginTop: 20 }}>
      {result.map((journey: any, i: number) => (
        <div
          key={i}
          style={{
            marginBottom: 24,
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          {/* ヘッダー */}
          <div style={{ marginBottom: 8 }}>
            <div>
              所要時間: {Math.round(journey.durationSecs / 60)}分
            </div>
            <div>
              乗換: {journey.transferCount}回
            </div>
          </div>

          {/* 区間 */}
          <div>
            {journey.legs.map((leg: any, index: number) => (
              <RouteSegment
                key={index}
                leg={leg}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}