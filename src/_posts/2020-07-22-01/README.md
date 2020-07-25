### 从零搭建个性化的 React Markdown Blog

```bash
$ npm install -g create-react-app@latest
$ npx create-react-app --template typescript react-md-blog
$ cd react-md-blog
$ yarn eject
# 更新配置
$ yarn add typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/webpack-env @types/node
# 安装 loader
$ yarn add html-loader markdown-loader highlight.js
```

### Q & A

- 为什么使用 React + markdown 搭建
- 适用于有个人服务器的开发者
