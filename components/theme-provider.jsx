"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const MEDIA = "(prefers-color-scheme: dark)";
export const THEMES = ["system", "light", "dark"];
const SERVER = typeof window === "undefined";

export const ThemeContext = createContext(undefined);

const getSafeTheme = (theme) => {
  if (THEMES.includes(theme)) {
    return theme;
  }

  return null;
};

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (SERVER) {
      return undefined;
    }

    const localTheme = window.localStorage.getItem("theme");
    const safeTheme = getSafeTheme(localTheme);

    return safeTheme ?? "system";
  });

  const applyTheme = useCallback((value) => {
    let themeValue = value;
    const html = document.documentElement;

    if (value === "system") {
      themeValue = window.matchMedia(MEDIA).matches ? "dark" : "light";
    }

    html.classList.forEach((className) => {
      if (!!getSafeTheme(className) && className !== themeValue) {
        html.classList.remove(className);

        if (themeValue) {
          html.classList.add(themeValue);
        }
      }
    });

    html.style.colorScheme = themeValue;
  }, []);

  const setTheme = useCallback(
    (unsafeTheme) => {
      const safeTheme = getSafeTheme(unsafeTheme);

      if (safeTheme && safeTheme !== theme) {
        try {
          localStorage.setItem("theme", safeTheme);
        } catch {
          // Empty
        }

        setThemeState(safeTheme);
        applyTheme(safeTheme);
      }
    },
    [theme, applyTheme]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA);

    const handleMediaQuery = () => {
      if (theme !== "system") {
        return;
      }

      applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleMediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, [theme, applyTheme]);

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key !== "theme") {
        return;
      }

      setTheme(e.newValue || null);
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [setTheme]);

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeScript() {
  const args = JSON.stringify([MEDIA, THEMES]).slice(1, -1);

  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(${function injectTheme(__MEDIA__, __THEMES__) {
          try {
            let theme = window.localStorage.getItem("theme");

            if (theme === "system" || !__THEMES__.includes(theme)) {
              theme = window.matchMedia(__MEDIA__).matches ? "dark" : "light";
            }

            const html = document.documentElement;

            html.classList.add(theme);
            html.style.colorScheme = theme;

            if (
              !document.head.querySelectorAll('meta[name="theme-color"]').length
            ) {
              const meta = document.createElement("meta");

              meta.setAttribute("name", "theme-color");
              meta.setAttribute("content", theme);

              document.head.appendChild(meta);
            }
          } catch {
            // Empty
          }
        }.toString()})(${args})`,
      }}
    />
  );
}
