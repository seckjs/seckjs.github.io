# API 文档

这部分不再只是占位页，而是开始整理当前插件里已经真实存在的运行时接口和数据结构。

## 文档范围

当前 API 区主要覆盖这几类内容：

- `background` 监听的 runtime message
- `content script` 支持的页面动作
- 导出 JSON 的公共结构
- 自动抓取快照结构
- 自定义 AI 域名的授权逻辑

## 快速入口

<div class="doc-card-grid">
  <a class="doc-entry-card" href="/api/runtime">
    <strong>📡 运行时消息</strong>
    <span>整理 popup、background、content script 之间的主要消息类型和动作名。</span>
  </a>
  <a class="doc-entry-card" href="/api/export-schema">
    <strong>🗂 导出结构</strong>
    <span>整理 courses、homeworks、submissions、questions 以及自动抓取快照的公共字段。</span>
  </a>
  <a class="doc-entry-card" href="/api/permissions">
    <strong>🔐 权限与授权</strong>
    <span>解释为什么自定义 AI 地址需要先测试连接，以及授权成功后的行为。</span>
  </a>
</div>

## 当前代码里已经稳定可描述的部分

### Background Runtime Message

`background.js` 当前已监听这些消息类型：

- `runTabAction`
- `downloadJson`
- `callAiChat`
- `testAiEndpoint`
- `getReviewSettings`
- `saveReviewSettings`
- `ensureAiEndpointPermission`

### Content Script Action

`content.js` 当前支持这些页面动作：

- `inspect`
- `extractCourses`
- `extractHomeworks`
- `resolveHomeworkListUrl`
- `extractSubmissions`
- `extractQuestions`
- `applyGrading`
- `submitCurrentPage`
- `startAutoReviewFlow`

## 存储相关键名

共享模块里当前已经定义了这些主要存储键：

- `lastAutoExtractData`
- `review_ai_panel_settings`
- `review_ai_panel_settings_session`
- `review_ai_batch_queue`
- `cx_auto_crawl_runtime_v1`
