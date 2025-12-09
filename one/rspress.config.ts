import * as path from "node:path";
import { defineConfig } from "rspress/config";
import mermaid from "rspress-plugin-mermaid";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "My Site",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    nav:[
      {
        text: "gaodeyuan",
        link: "/guide/",
        position: "left",
      },
      {
        text: "weijiaxing",
        link: "",
        position: "right",
      }
    ],
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
  plugins: [
    mermaid({
      mermaidConfig: {
        theme: "forest",
      },
    }),
  ],
});
