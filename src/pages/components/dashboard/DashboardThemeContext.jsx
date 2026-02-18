import * as React from "react";
import { dashboardDark, dashboardLight } from "./dashboardTheme";

const STORAGE_KEY = "svl-dashboard-theme";

const DashboardThemeContext = React.createContext({
  mode: "dark",
  theme: dashboardDark,
  setMode: () => {},
});

export function useDashboardTheme() {
  const ctx = React.useContext(DashboardThemeContext);
  return ctx ?? { mode: "dark", theme: dashboardDark, setMode: () => {} };
}

export function DashboardThemeProvider({ children }) {
  const [mode, setModeState] = React.useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "dark";
    } catch {
      return "dark";
    }
  });

  const setMode = React.useCallback((next) => {
    setModeState((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {}
      return value;
    });
  }, []);

  const theme = mode === "light" ? dashboardLight : dashboardDark;

  const value = React.useMemo(
    () => ({ mode, theme, setMode }),
    [mode, setMode]
  );

  return (
    <DashboardThemeContext.Provider value={value}>
      {children}
    </DashboardThemeContext.Provider>
  );
}
