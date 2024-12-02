import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Room sasshu",
  description: "sasshu's homepage",
  lang: "ja-JP",
  lastUpdated: true,
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  themeConfig: {
    siteTitle: "Room sasshu",
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/index.md" },
      { text: "Works", link: "/works/index.md" },
      { text: "Articles", link: "/articles/index.md" },
    ],

    // sidebar: [
    //   {
    //     text: "Articles",
    //     items: [
    //       { text: "Markdown Examples", link: "/articles/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/articles/api-examples" },
    //     ],
    //   },
    // ],

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

    darkModeSwitchLabel: "テーマカラー",
    lightModeSwitchTitle: "ライトモードに変更",
    darkModeSwitchTitle: "ダークモードに変更",
    externalLinkIcon: true,
  },
});
