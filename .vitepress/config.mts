import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Room sasshu",
  description: "sasshu's homepage",
  lang: "ja-JP",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Room sasshu",
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/index.md" },
      { text: "Works", link: "/works/index.md" },
      { text: "Examples", link: "/articles/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/articles/markdown-examples" },
          { text: "Runtime API Examples", link: "/articles/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/sasshu/mysite" }],

    search: {
      provider: "local",
    },

    footer: {
      copyright: "© sasshu 2024",
    },
    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },
  },
});
