import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

const DEFAULT_FONTS =
  "system-ui, -apple-system, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif";

export default defineConfig({
  shortcuts: [
    {
      "flex-center": "flex items-center justify-center",
      hstack: "flex items-center",
      vstack: "hstack flex-col",
      "shadow-c": "shadow-neutral-400 dark:shadow-neutral-800",
      "prose-lg": "lg:text-lg max-w-content",
      "nav-item": "hstack gap-x-1 text-fg-light hover:text-fg-dark",
      "nav-active": "underline decoration-wavy decoration underline-offset-4",
      btn: "hstack gap-x-1 rounded transition-colors decoration-none text-sm !text-fg bg-bg-dark hover:(bg-neutral-500 !text-white !no-underline)",
      "add-ring": "ring-offset-bg outline-none ring-2 ring-primary ring-offset-2"
    }
  ],
  preflights: [
    {
      getCSS: () => `
        :root {
          --fg: 0 0% 20%;
          --fg-light: 0 0% 35%;
          --fg-dark: 0 0% 0%;
          --bg: 0 0% 100%;
          --bg-dark: 0 0% 92%;
          --primary: 210 80% 45%;
          --border: 0 0% 85%;
        }

        .dark {
          --fg: 0 0% 85%;
          --fg-light: 0 0% 75%;
          --fg-dark: 0 0% 100%;
          --bg: 0 0% 17%;
          --bg-dark: 0 0% 25%;
          --primary: 210 70% 63%;
          --border: 0 0% 35%;
        }
      `
    }
  ],
  theme: {
    fontFamily: {
      sans: `Computer Modern Sans, ${DEFAULT_FONTS}`,
      ui: DEFAULT_FONTS
    },
    colors: {
      fg: "hsl(var(--fg))",
      "fg-light": "hsl(var(--fg-light))",
      "fg-dark": "hsl(var(--fg-dark))",
      bg: "hsl(var(--bg))",
      "bg-dark": "hsl(var(--bg-dark))",
      primary: "hsl(var(--primary))",
      border: "hsl(var(--border))"
    },
    maxWidth: {
      content: "90ch"
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "sub"
      }
    }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-lg mx-auto".split(" ")
});
