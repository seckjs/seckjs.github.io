# 界面总览

这一页帮助你先认识插件里的主要界面，理解“每个区域是做什么的”。

## 顶部 Hero 区

弹窗顶部会显示插件标题和当前页面识别状态。

- 标题：`超星课程助手`
- 状态提示：默认会显示“正在识别当前页面...”
- 右上角标签：`AI 批阅`

如果这里长期停留在识别中，通常说明当前页面还没准备好，或者不是插件能处理的超星页面。

## 主导航

弹窗主导航目前分成 3 个标签：

1. `主页`
2. `日志`
3. `设置`

这也是整个插件最核心的使用路径。

## 主页：待批阅作业

主页聚焦的是“现在能不能开始批阅”。

你会看到这些区域：

- 待批阅作业标题和汇总信息
- 全选开关
- `AI 一键批阅` 按钮
- 待批阅列表

列表里的每一项通常会包含课程名、作业名、已交 / 未交统计和单独进入批阅的按钮。

## 日志：自动抓取结果与课程进度

日志页聚焦的是“后台正在做什么”以及“长流程现在跑到哪一步了”。

主要有两块：

- 自动抓取结果
- 课程进度

课程进度里会展示每门课的作业总数、已完成数量、跳过数量，以及当前作业名。这一页非常适合用来判断问题到底出在课程、作业还是提交列表上。

<div class="shot-grid">
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/popup-logs-overview.png" alt="扩展弹窗日志页，显示自动抓取结果和课程进度">
    <figcaption>弹窗日志页的真实截图：顶部是自动抓取完成状态，下面会列出作业汇总、提交汇总以及课程进度，适合快速判断批量流程卡在了哪里。</figcaption>
  </figure>
</div>

## 设置：AI 与批阅行为

设置页决定了插件的整体行为，也是第一次使用最需要认真配置的一页。

### AI 相关配置

- 常用 API 地址
- AI 接口地址
- API Key
- 常用模型
- 模型名
- 请求超时
- 附加批改要求

### 批阅行为配置

- 自动填写评分和批语
- 全部完成后自动提交当前页
- 自动提交方式

<div class="shot-grid">
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/popup-settings-ai.png" alt="扩展弹窗设置页上半部分，显示服务商预设、测试连接和 API 配置">
    <figcaption>设置页上半部分：先选服务商预设，再测试连接、填写接口地址和 API Key。第一次使用时，大多数排错都从这里开始。</figcaption>
  </figure>
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/popup-settings-submit.png" alt="扩展弹窗设置页中下半部分，显示模型名、请求超时和附加批改要求">
    <figcaption>设置页中下半部分：继续补全模型名、请求超时和附加批改要求。这部分会直接影响批阅风格和模型响应稳定性。</figcaption>
  </figure>
</div>

## 页面内批阅面板

在实际批阅页面里，还会出现一个辅助面板，方便查看识别状态并直接开始处理。

<div class="shot-grid">
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/inpage-review-home.png" alt="页面内批阅面板主页，显示开始选题 AI、刷新识别和停止按钮">
    <figcaption>题目识别完成后，可以直接在这里开始处理、刷新识别结果，或者停止当前流程。</figcaption>
  </figure>
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/inpage-review-settings.png" alt="页面内批阅面板设置页，显示常用 API 地址、测试连接和 AI 参数">
    <figcaption>这里也能查看和调整 AI 相关设置，比如接口地址、测试连接和模型参数。</figcaption>
  </figure>
</div>

## 状态框

弹窗底部有一个状态框，用来展示当前最关键的运行反馈，例如：

- 准备就绪
- 设置已保存
- AI 接口连接正常
- 打开批阅页失败
- 权限未授权

如果使用过程出问题，优先先看这里，再去日志页定位。

## 推荐理解顺序

<div class="quick-check">
  <strong>第一次接触这个插件时，建议按这个顺序理解</strong>
  <div>1. 先看主页，知道插件当前发现了哪些待处理作业。</div>
  <div>2. 再看设置，确认 AI 接口和自动提交逻辑。</div>
  <div>3. 最后看日志，理解批量流程的进度和异常反馈。</div>
</div>
