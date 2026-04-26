# 条款与政策

下面的说明主要帮助你了解扩展会申请哪些权限、数据会保存在什么位置，以及 AI 请求会发往哪里。

## 使用范围

当前这是一款在 Edge 中本地加载使用的扩展：

- 扩展主体运行在浏览器里。
- 使用时需要在 Edge 扩展管理页手动加载。
- 相关说明页用于帮助你安装、配置和排错。

## 当前声明的主要权限

下面这张表已经对齐当前 `manifest.json`。

| 权限 | 官方语义 | 在本扩展中的用途 |
| --- | --- | --- |
| `activeTab` | 用户触发扩展时，临时访问当前活动标签页。 | 当用户点击扩展弹窗后，读取当前超星页面上下文。 |
| `tabs` | 与浏览器标签页交互。 | 查询当前标签、打开批阅页、跟踪自动流程所在标签。 |
| `storage` | 存储和读取扩展数据。 | 保存批阅设置、批量队列、自动抓取快照和运行态。 |
| `downloads` | 以编程方式发起和管理下载。 | 导出 JSON 结果时保存文件。 |
| `webNavigation` | 监听导航状态并读取 frame 信息。 | 获取 tab 内所有 frame，并驱动自动抓取流程。 |
| `permissions` | 在运行时请求可选权限。 | 对自定义 AI 域名执行授权检查与申请。 |

## Host 权限与可选 Host 权限

当前扩展还声明了两类域名权限：

### 固定 host 权限

这些 host 权限目前已经写进 `manifest.json`：

- 超星相关域名：`*.chaoxing.com`、`*.chaoxing.com.cn`
- 内置 AI 提供商域名：Moonshot、DeepSeek、OpenAI、Gemini、Zhipu、MiniMax、Doubao、Qwen

这些权限主要用于：

- 从扩展页面或 service worker 发起 `fetch`
- 在 `tabs` API 中读取匹配站点的 URL 等信息
- 访问超星页面上下文和内置 AI 服务地址

### 可选 host 权限

当前扩展还声明了：

- `https://*/*`
- `http://*/*`

这类权限不是安装时默认全部使用，而是配合运行时权限请求使用。对于用户后来才填写的自定义 AI 地址，扩展会在合适的用户手势场景里申请对应域名访问权限。

## 数据存储方式

根据当前代码实现，扩展会把部分配置保存在 `chrome.storage` 中。

### 本地持久化

以下信息可能会存入扩展本地存储：

- 当前选择的 AI 提供商
- 接口地址
- 模型名
- 超时时间
- 附加批改要求
- 自动填写 / 自动提交开关
- 自动抓取结果快照

### 会话级存储

如果用户没有勾选“记住 API Key 到本地存储”，API Key 会优先走 `chrome.storage.session`。

按照 Chrome 官方文档，`storage.session` 主要驻留在内存中，扩展被禁用、重载、更新或浏览器重启后会被清空。这也比较符合“临时保存敏感配置”的使用预期。

## AI 请求与第三方服务

> [!NOTE]
> 当前公开版本虽然保留了“插件网关”模式的入口，但目前没有默认可用的公共插件网关。因此大多数使用场景下，AI 请求仍以浏览器直接访问你填写的目标接口地址为主。只有在你自行部署并配置了可用网关后，相关入口才有实际意义。

AI 请求会由扩展直接从浏览器端发往你填写的目标接口地址，而不是先经过中转服务器再转发。

这意味着：

1. 你填写的 `endpoint`、`model`、`API Key` 会直接影响请求目标。
2. 如果你使用内置预设，流量会直接去对应服务商域名。
3. 如果你使用自定义 OpenAI 兼容地址，请先点击一次“测试连接”完成权限授权。
4. 一旦请求发往第三方 AI 服务，也需要遵守对应服务商自己的条款与隐私政策。

## 本地加载、更新与移除

根据 Microsoft Learn，Edge 支持在开发者模式下直接加载包含 `manifest.json` 的扩展目录进行本地测试。

代码更新后，推荐的本地更新方式是：

1. 打开 `edge://extensions/`
2. 点击当前扩展卡片上的 `Reload`
3. 返回目标页面刷新网页

如果不再需要本地扩展，也可以直接在扩展管理页移除。

## 风险提示

- 请仅在你有权限访问的超星页面上使用本扩展。
- AI 批阅结果仍然建议人工抽检，不应默认视为绝对正确。
- 使用第三方 AI 服务时，请自行判断数据发送范围是否符合你的使用场景。
- 如果需要长期保存 API Key，请确认当前设备与浏览器环境是可信的。

## 参考资料

- [Microsoft Learn: Sideload an extension to install and test it locally](https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading)
- [Chrome for Developers: The `activeTab` permission](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab)
- [Chrome for Developers: Declare permissions](https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions)
- [Chrome for Developers: `chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)
- [Chrome for Developers: `chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads)
- [Chrome for Developers: `chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation)
- [Chrome for Developers: `chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)
