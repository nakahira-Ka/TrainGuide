import { formatTime } from "../../utils/timeFormat";

type Leg = {
  kind: "walk" | "transit";
  routeName?: string;
  headsign?: string;

  from: { name: string };
  to: { name: string };

  departureSecs: number;
  arrivalSecs: number;
};

function isTransferWalk(leg: Leg, next?: Leg) {
  return leg.kind === "walk" && next?.kind === "transit";
}
type Props = {
  leg: Leg;
};

export function RouteSegment({ leg, next }: { leg: Leg; next?: Leg }) {
  if (leg.kind === "walk") {
    return (
      <div style={{ color: "#888", fontSize: 13 }}>
        {isTransferWalk(leg, next) ? (
          <>乗換: 徒歩 約 {Math.round((leg.arrivalSecs - leg.departureSecs) / 60)}分</>
        ) : (
          <>徒歩 約 {Math.round((leg.arrivalSecs - leg.departureSecs) / 60)}分</>
        )}
      </div>
    );
  }

  return (
    <div style={{ borderLeft: "3px solid #2196f3", paddingLeft: 10 }}>
      <div>
        {leg.from.name} → {leg.to.name}
      </div>

      <div style={{ fontWeight: "bold" }}>
        {leg.routeName}
      </div>

      <div style={{ fontSize: 12, color: "#666" }}>
        {leg.headsign}
      </div>
    </div>
  );
}