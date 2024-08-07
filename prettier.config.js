/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  trailingComma: "es5",
  singleQuote: false,
  semi: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/app/(.*)$",
    "^@/components/(.*)$",
    "^@/hooks/(.*)$",
    "^@/lib/(.*)$",
    "^@/actions/(.*)$",
    "",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: "./tailwind.config.js",
};
