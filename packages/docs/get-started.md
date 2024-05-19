---
search: false
---
# 最新 Vue3 + TS 组件库

## 安装


```bash
npm i @haosama-ui --save
```

## 开始使用

**全局使用**


```js
// 引入所有组件
import HaosamaUI from 'haosama-ui'
// 引入样式
import 'haosama-ui/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(HaosamaUI).mount('#app')
```

```vue
<template>
  <hr-button>Button</hr-button>
</template>
```

**单个导入**

Haosama-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <hr-button>Button</hr-button>
</template>
<script>
  import { HrButton } from ' haosama-ui'
  export default {
    components: { HrButton },
  }
</script>
```

## 亮点

::: details
- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
- 当然，也会展示 发布“开箱即用” 的 npm 包
:::

