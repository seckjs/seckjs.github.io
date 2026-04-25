# Chaoxing Edge Assistant Web

`web/` 是项目的文档站目录，使用 VitePress 构建，用来展示安装方法、AI 配置、批阅流程、常见问题和相关说明页面。

## 启动开发环境

```bash
npm install
npm run dev
```

如果你在 Windows PowerShell 里遇到 `npm.ps1` 执行限制，优先使用下面任意一种方式：

```powershell
npm.cmd run dev
```

或直接执行仓库里准备好的脚本：

```powershell
.\dev.cmd
```

## 构建静态站点

```bash
npm run build
```

Windows 下也可以直接执行：

```powershell
.\build.cmd
```

构建输出目录为：

```text
web/docs/.vitepress/dist
```

## 目录说明

```text
web/
  package.json
  build.cmd
  dev.cmd
  docs/
    .vitepress/   # 站点配置与主题样式
    guide/        # 使用文档
    api/          # 接口与数据结构说明
    policy/       # 条款与政策
    public/       # 图片、图标、二维码等静态资源
```

## 常改位置

- 改导航、侧边栏、站点标题：`docs/.vitepress/config.mjs`
- 改首页和文档内容：`docs/`
- 改主题样式：`docs/.vitepress/theme/style.css`
- 改图片和图标：`docs/public/`
