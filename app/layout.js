import "@/app/globals.css";

import localFont from "next/font/local";

import { ThemeProvider, ThemeScript } from "@/components/theme-provider";
import { cx } from "@/lib/utils";

export const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  preload: true,
});

export const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  preload: true,
});

export const metadata = {
  title: "Next boilerplate",
  description: "Next.js project with CVA, ESLint, Prettier, and Tailwind CSS",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <ThemeScript />
      </head>
      <body
        className={cx(
          "bg-white font-sans dark:bg-neutral-900",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
