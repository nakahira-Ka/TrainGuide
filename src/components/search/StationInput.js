import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSuggest } from "../../hooks/useSuggest";
import { SuggestList } from "./SuggestList";
import { stationList } from "../../data/stationIndex";
export function StationInput({ label, value, onSelect }) {
    const [query, setQuery] = useState("");
    const [showSuggest, setShowSuggest] = useState(false);
    const { suggestions, loading, error } = useSuggest(query);
    return (_jsxs("div", { style: { position: "relative", width: "100%" }, children: [_jsx("input", { type: "text", placeholder: label, value: query, onChange: (e) => {
                    setQuery(e.target.value);
                    setShowSuggest(true);
                }, onFocus: () => setShowSuggest(query.length > 0) }), showSuggest && (_jsx("div", { style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                }, children: _jsx(SuggestList, { items: suggestions, loading: loading, error: error, onSelect: (item) => {
                        const station = stationList.find((s) => s.id === item.id);
                        if (!station)
                            return;
                        onSelect(station);
                        setQuery(station.name);
                        setShowSuggest(false);
                    } }) }))] }));
}
