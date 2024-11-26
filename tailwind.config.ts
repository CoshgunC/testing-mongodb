import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          "100": "#eee",
          "200": "#ccc",
          "300": "#aaa",
          "400": "#999",
          "500": "#777",
          "600": "#555",
          "700": "#333",
          "800": "#222",
          "900": "#111",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
