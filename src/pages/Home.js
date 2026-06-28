import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StationInput } from "../components/search/StationInput";
import { useRouteSearch } from "../hooks/useRouteSearch";
import { RouteResult } from "../components/route/RouteResult";
export default function Home() {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const { route, loading, error, search } = useRouteSearch();
    return (_jsxs("div", { style: { padding: 20 }, children: [_jsx("h1", { children: "Train Guide" }), _jsx(StationInput, { label: "\u51FA\u767A", value: from, onSelect: setFrom }), _jsx("div", { style: { height: 10 } }), _jsx(StationInput, { label: "\u5230\u7740", value: to, onSelect: setTo }), _jsx("div", { style: { marginTop: 20 }, children: _jsx("button", { onClick: () => {
                        if (from && to) {
                            search(from, to);
                        }
                    }, children: "\u691C\u7D22" }) }), _jsxs("div", { style: { marginTop: 20 }, children: [loading && _jsx("p", { children: "\u691C\u7D22\u4E2D..." }), error && (_jsx("p", { style: { color: "red" }, children: error }))] }), route && (_jsx("div", { style: { marginTop: 20 }, children: _jsx(RouteResult, { result: route }) }))] }));
}
