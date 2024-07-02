import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Haosama-UI",
  description: "基于Vue3.0的UI库 ",
  appearance: false, 
  base: '/haosama-ui/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/get-started' },
      { text: '组件', link: '/components/button' }
    ],
    search: {
      provider: "local",
    },

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //   ]
      // },
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Collapse 折叠面板", link: "components/collapse" },
          { text: "Dropdown 下拉菜单", link: "components/dropdown" },
        ],
      },
      {
        text: "反馈组件",
        collapsed: false,
        items: [
          { text: "Alert 提示", link: "components/alert" },
          { text: "Loading 加载", link: "components/loading" },
          { text: "Message 消息提示", link: "components/message" },
          { text: "MessageBox 消息弹出框", link: "components/messagebox" },
          { text: "Tooltip 文字提示", link: "components/tooltip" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/darknessYue/haosama-ui' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  }
})
