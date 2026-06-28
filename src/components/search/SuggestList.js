import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SuggestList({ items, loading, error, onSelect, }) {
    if (loading)
        return _jsx("div", { children: "\u691C\u7D22\u4E2D..." });
    if (error)
        return _jsx("div", { style: { color: "red" }, children: error });
    if (items.length === 0)
        return _jsx("div", { children: "\u5019\u88DC\u306A\u3057" });
    return (_jsx("div", { style: {
            border: "1px solid #ccc",
            background: "#fff",
        }, children: items.map((item) => (_jsxs("div", { onClick: () => onSelect(item), style: {
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
            }, children: [_jsx("div", { children: item.name }), _jsx("div", { style: { fontSize: "12px", color: "#666" }, children: item.operator })] }, item.id))) }));
}
