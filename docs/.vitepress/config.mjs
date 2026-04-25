import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "超星主观题批改助手",
  description: "超星主观题批改助手主页与使用说明文档",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/logo-32.png" }],
    ["meta", { name: "theme-color", content: "#355dff" }]
  ],
  themeConfig: {
    logo: "/logo-32.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "使用文档", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "API 文档",
        activeMatch: "^/api/",
        items: [
          { text: "接口概览", link: "/api/" },
          { text: "运行时消息", link: "/api/runtime" },
          { text: "导出结构", link: "/api/export-schema" },
          { text: "权限与授权", link: "/api/permissions" }
        ]
      },
      { text: "条款与政策", link: "/policy/", activeMatch: "^/policy/" }
    ],
    search: {
      provider: "local"
    },
    sidebar: {
      "/guide/": [
        {
          text: "开始使用",
          items: [
            { text: "文档首页", link: "/guide/" },
            { text: "安装与加载扩展", link: "/guide/install" },
            { text: "界面总览", link: "/guide/interface-tour" },
            { text: "AI 配置", link: "/guide/ai-config" },
            { text: "批阅流程", link: "/guide/review-workflow" },
            { text: "日志与排错", link: "/guide/logs-and-troubleshooting" }
          ]
        }
      ],
      "/api/": [
        {
          text: "API 文档",
          items: [
            { text: "接口概览", link: "/api/" },
            { text: "运行时消息", link: "/api/runtime" },
            { text: "导出结构", link: "/api/export-schema" },
            { text: "权限与授权", link: "/api/permissions" }
          ]
        }
      ],
      "/policy/": [
        {
          text: "条款与政策",
          items: [{ text: "使用说明", link: "/policy/" }]
        }
      ]
    },
    outline: {
      label: "本页导航",
      level: [2, 3]
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    footer: {
      message: "",
      copyright: "Copyright © 2026 超星主观题批改助手"
    }
  }
});
