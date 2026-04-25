# 运行时消息

这一页根据当前代码里的真实实现整理，而不是抽象占位。

## Background 监听的消息类型

`background.js` 目前通过 `chrome.runtime.onMessage.addListener` 处理下面这些消息：

### `runTabAction`

用途：在指定标签页的所有 frame 中执行某个页面动作，并从多个返回结果里挑出最合适的一个。

常见字段：

```json
{
  "type": "runTabAction",
  "tabId": 123,
  "action": "extractHomeworks",
  "payload": {}
}
```

### `downloadJson`

用途：把导出结果保存为 JSON 文件。

### `callAiChat`

用途：向当前选定的 AI 接口发起聊天补全请求，用于批阅推理。

### `testAiEndpoint`

用途：测试 AI 地址是否可达，顺带验证配置与权限。

### `getReviewSettings`

用途：读取当前批阅配置。

### `saveReviewSettings`

用途：保存当前批阅配置。

### `ensureAiEndpointPermission`

用途：确保自定义 AI 域名已经拿到浏览器权限。

## Content Script 支持的动作

`content.js` 中的 `runAction(action, payload)` 当前支持以下动作名：

### `inspect`

读取当前页面上下文，判断是不是课程页、作业页、批阅页，以及当前可执行哪些能力。

### `extractCourses`

从课程页提取课程记录。

### `extractHomeworks`

从作业页提取作业记录，支持分页抓取。

### `resolveHomeworkListUrl`

解析某门课对应的作业列表地址。

### `extractSubmissions`

从批阅列表页提取提交记录。

### `extractQuestions`

从具体批阅页提取主观题记录，供后续 AI 批阅使用。

### `applyGrading`

把 AI 返回的评分和评语回填到当前页面。

### `submitCurrentPage`

提交当前批阅页面。

### `startAutoReviewFlow`

在批阅列表页启动连续进入与串行批阅流程。

## `runTabAction` 的返回思路

Background 不只返回单一结果，而是会综合多个 frame 的响应，挑一个“最好”的结果作为 `best`，同时保留候选信息。

典型返回结构大致类似：

```json
{
  "ok": true,
  "action": "extractHomeworks",
  "best": {
    "ok": true,
    "handled": true,
    "count": 6,
    "priority": 60,
    "summary": "已抓取 6 条作业记录"
  },
  "candidates": [
    {
      "frameId": 0,
      "frameUrl": "https://example.com",
      "count": 6,
      "priority": 60,
      "summary": "已抓取 6 条作业记录"
    }
  ]
}
```

## 为什么这个设计很实用

超星页面常常有 iframe 或不同嵌套层级。把动作广播给多个 frame，再挑最合理的结果，比只固定打主 frame 更稳。
