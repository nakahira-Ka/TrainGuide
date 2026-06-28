import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
function isTransferWalk(leg, next) {
    return leg.kind === "walk" && next?.kind === "transit";
}
export function RouteSegment({ leg, next }) {
    if (leg.kind === "walk") {
        return (_jsx("div", { style: { color: "#888", fontSize: 13 }, children: isTransferWalk(leg, next) ? (_jsxs(_Fragment, { children: ["\u4E57\u63DB: \u5F92\u6B69 \u7D04 ", Math.round((leg.arrivalSecs - leg.departureSecs) / 60), "\u5206"] })) : (_jsxs(_Fragment, { children: ["\u5F92\u6B69 \u7D04 ", Math.round((leg.arrivalSecs - leg.departureSecs) / 60), "\u5206"] })) }));
    }
    return (_jsxs("div", { style: { borderLeft: "3px solid #2196f3", paddingLeft: 10 }, children: [_jsxs("div", { children: [leg.from.name, " \u2192 ", leg.to.name] }), _jsx("div", { style: { fontWeight: "bold" }, children: leg.routeName }), _jsx("div", { style: { fontSize: 12, color: "#666" }, children: leg.headsign })] }));
}
