import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import swup from "@swup/astro";
import AutoImport from "astro-auto-import";
import { defineConfig, envField } from "astro/config";
import { AppConfig } from "./src/utils";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: AppConfig.site,
  prefetch: {
    prefetchAll: true
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({
        context: "server",
        access: "secret"
      })
    }
  },
  integrations: [
    tailwind(),
    AutoImport({
      imports: ["./src/components/Code.astro"]
    }),
    mdx(),
    sitemap(),
    swup({
      progress: true,
      accessibility: true,
      forms: true,
      cache: false,
      preload: {
        hover: true,
        visible: false
      },
      smoothScrolling: true
    })
  ],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
      wrap: true
    }
  }
});
