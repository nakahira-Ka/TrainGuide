import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { RouteSegment } from "./RouteSegment";
export function RouteResult({ result }) {
    if (!result)
        return null;
    const route = result;
    return (_jsxs("div", { style: { marginTop: 20 }, children: [_jsxs("div", { children: ["\u6240\u8981\u6642\u9593: ", Math.round(route.durationSecs / 60), "\u5206"] }), _jsxs("div", { children: ["\u4E57\u63DB: ", route.transferCount, "\u56DE"] }), _jsx("div", { style: { marginTop: 10 }, children: route.legs.map((leg, i) => (_jsx(RouteSegment, { leg: leg, next: route.legs[i + 1] }, i))) })] }));
}
