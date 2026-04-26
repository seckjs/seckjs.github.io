# AI 配置

> [!WARNING]
> 当前版本保留了“插件网关”模式的界面入口，但目前**尚未提供可直接使用的公共插件网关**。如果你没有自行部署对应服务，这部分功能基本无效。实际使用时，建议优先填写你自己的 `endpoint`、`API Key` 和 `model`，按自定义 API 方式配置。

## 支持的接口类型

插件已经提供多组常见服务商预设，核心是 OpenAI 兼容接口模式，包括：

- Moonshot / Kimi
- DeepSeek
- OpenAI
- Google Gemini
- Zhipu GLM
- MiniMax
- Doubao
- Qwen
- Custom

## 推荐配置顺序

1. 先选择服务商预设。
2. 再填写 `API Key`。
3. 选择模型，或者手动输入模型名。
4. 设定请求超时。
5. 点击“测试连接”。

## 配置图示

<div class="shot-grid">
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/popup-settings-ai.png" alt="AI 配置区域上半部分，显示服务商预设、测试连接和接口地址">
    <figcaption>AI 配置的入口部分：先选预设，再点击“测试连接”，确认接口地址和 API Key 都已经填好。这里的示例使用的是 Moonshot / Kimi 预设。</figcaption>
  </figure>
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/popup-settings-submit.png" alt="AI 配置区域中下半部分，显示模型名、请求超时和附加批改要求">
    <figcaption>继续往下可以补全常用模型、模型名、请求超时和附加批改要求。这里决定了模型输出风格，也决定了请求是不是容易超时。</figcaption>
  </figure>
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/model-dropdown-kimi.png" alt="Kimi 相关模型的下拉列表示例">
    <figcaption>模型下拉列表示例：可以直接选择常用模型，也可以在需要时手动填写自定义模型名。</figcaption>
  </figure>
</div>

## 为什么一定要测试连接

对于非内置域名的自定义接口地址，测试连接不仅是在验证连通性，也是在帮助扩展申请该域名的访问权限。

如果没做这一步，后续批阅时可能会直接报权限错误。

## 批阅相关配置建议

### 自动填写评分和批语

建议开启。这样模型返回结果后，页面可以直接回填评分和评语。

### 全部完成后自动提交当前页

适合减少重复点击，但第一次使用时建议先保守一点，先确认评分结果是否符合预期。

### 自动提交方式

- `提交当前页`：适合人工逐份确认。
- `提交并进入下一份`：适合串行批量处理。

## 典型报错怎么理解

### 未获得当前 AI 地址的访问权限

说明当前接口地址还没有完成授权。回到设置页点击一次“测试连接”。

### API Key 不能为空 / 模型名不能为空

说明必填项缺失，先回设置页补全。

### 接口超时

先检查网络和模型响应速度，再适当调大超时时间。
