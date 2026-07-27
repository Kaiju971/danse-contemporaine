import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState, } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";
const STORAGE_KEY = "color-mode";
const ColorModeContext = createContext(undefined);
const getInitialMode = () => {
    if (typeof window === "undefined")
        return "dark";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark")
        return stored;
    // Pas de préférence enregistrée : on suit la préférence système.
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
};
export const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState(getInitialMode);
    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);
    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }), [mode]);
    const theme = useMemo(() => getTheme(mode), [mode]);
    return (_jsx(ColorModeContext.Provider, { value: colorMode, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), children] }) }));
};
export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error("useColorMode doit être utilisé dans un ColorModeProvider");
    }
    return context;
};
