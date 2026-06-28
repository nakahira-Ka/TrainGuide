import { RouteSegment } from "./RouteSegment";

type Props = {
  result: any;
};

export function RouteResult({ result }: Props) {
  if (!result) return null;

  const route = result;

  return (
    <div style={{ marginTop: 20 }}>
      <div>
        所要時間: {Math.round(route.durationSecs / 60)}分
      </div>

      <div>
        乗換: {route.transferCount}回
      </div>

      <div style={{ marginTop: 10 }}>
        {route.legs.map((leg: any, i: number) => (
          <RouteSegment
            key={i}
            leg={leg}
            next={route.legs[i + 1]}
          />
        ))}
      </div>
    </div>
  );
}