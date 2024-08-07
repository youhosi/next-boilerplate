import { use, useEffect, useState } from "react";

import { ThemeContext } from "@/components/theme-provider";

export function useTheme() {
  const theme = use(ThemeContext);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return {
      setTheme: () => null,
      theme: null,
    };
  }

  return theme;
}
