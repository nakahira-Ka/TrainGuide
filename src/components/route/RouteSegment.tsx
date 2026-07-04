import { formatTime } from "../../utils/timeFormat";

/* 区間表示 */
type Props = {
  leg: any;
};

export function RouteSegment({ leg }: Props) {
  const isWalk = leg.kind === "walk";

  /* 徒歩 */
  if (isWalk) {
    const min = Math.round(
      (leg.arrivalSecs - leg.departureSecs) / 60
    );

    return (
      <div
        style={{
          padding: "6px 0",
          color: "#666",
          fontSize: 13,
        }}
      >
        徒歩 約 {min}分
      </div>
    );
  }

  /* 電車 */
  return (
    <div
      style={{
        borderLeft: "3px solid #2196f3",
        paddingLeft: 10,
        margin: "10px 0",
      }}
    >
      {/* 出発 */}
      <div style={{ fontSize: 14 }}>
        {formatTime(leg.departureSecs)}　{leg.from.name}
      </div>

      {/* 路線 */}
      <div
        style={{
          fontWeight: "bold",
          margin: "4px 0",
        }}
      >
        {leg.routeName}
      </div>

      {/* 行先 */}
      {leg.headsign && (
        <div style={{ fontSize: 12, color: "#666" }}>
          {leg.headsign}
        </div>
      )}

      {/* 矢印 */}
      <div style={{ margin: "4px 0" }}>↓</div>

      {/* 到着 */}
      <div style={{ fontSize: 14 }}>
        {formatTime(leg.arrivalSecs)}　{leg.to.name}
      </div>
    </div>
  );
}