"use client";

import { THEMES as themes } from "@/components/theme-provider";
import { useTheme } from "@/hooks/use-theme";
import { cva, cx } from "@/lib/utils";

function getThemeIcon(theme) {
  if (theme === "system") {
    return "🖥️";
  }

  if (theme === "light") {
    return "🌞";
  }

  if (theme === "dark") {
    return "🌚";
  }

  return null;
}

const themeStyles = cva({
  base: "flex items-center rounded-full border border-gray-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800",
  variants: {
    size: {
      small: "gap-1.5 px-2.5 py-1.5",
      medium: "gap-2 px-4 py-3",
      large: "gap-3 px-5 py-4",
    },
  },
});

export function ThemeToggle({ size = "medium", className = null }) {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <div className={themeStyles({ size, className })}>
      {themes.map((theme) => (
        <button
          key={theme}
          type="button"
          onClick={() => setTheme(theme)}
          className={cx("flex items-center dark:text-gray-600", {
            "text-black dark:text-white": theme === currentTheme,
          })}
        >
          {getThemeIcon(theme)}
        </button>
      ))}
    </div>
  );
}
