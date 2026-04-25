# 安装与加载扩展

> [!TIP]
> Microsoft Learn 提供了 Edge 扩展本地加载的官方步骤。只要选择包含 `manifest.json` 的扩展文件夹，就可以完成加载。

## 第一步：在 Edge 中加载项目目录

1. 打开 `edge://extensions/`，或在浏览器菜单里进入“扩展”管理页。
2. 开启“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择包含 `manifest.json` 的扩展文件夹。

根据 Microsoft Edge 官方文档，这就是本地 sideload 扩展的标准流程。

## 安装步骤图示

<div class="shot-grid">
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/edge-load-unpacked.png" alt="Edge 扩展管理页中的开发者模式与加载已解压的扩展程序按钮">
    <figcaption>官方公开截图：展示 Edge 扩展管理页里的 <code>Developer mode</code> 与 <code>Load unpacked</code>。</figcaption>
  </figure>
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/edge-extension-card.png" alt="Edge 已安装扩展页中的本地加载扩展卡片">
    <figcaption>官方公开截图：展示本地加载后的扩展卡片，以及 <code>Details</code>、<code>Remove</code>、<code>Reload</code> 等入口。</figcaption>
  </figure>
  <figure class="shot-card">
    <img class="shot-image" src="/screenshots/extension-card-local-masked.png" alt="扩展在 Edge 中加载后的本地扩展卡片，敏感信息已遮挡">
    <figcaption>本地加载后的扩展示例：扩展 ID 和不适合公开展示的字段已经做了遮挡，方便对照界面位置。</figcaption>
  </figure>
</div>

## 第二步：确认弹窗可以正常打开

加载完成后，建议把插件固定到工具栏，方便随时进入弹窗主页、日志和设置。

## 第三步：进入超星相关页面

插件主要面向超星课程和作业页面。进入页面后，它会尝试识别：

- 当前课程和班级信息
- 作业列表
- 批阅入口
- 页面是否支持抓取或回填

如果你刚刚重新加载过扩展，Microsoft Learn 也建议顺手刷新一下目标网页，避免页面还停留在旧脚本状态。

## 安装完成后的快速检查

<div class="quick-check">
  <strong>建议至少确认下面 4 项</strong>
  <div>1. 扩展图标能正常显示。</div>
  <div>2. 弹窗能打开，并能看到 <code>主页 / 日志 / 设置</code> 三个标签。</div>
  <div>3. 进入超星页面后，弹窗顶部不再一直停留在“正在识别当前页面”。</div>
  <div>4. 设置页可以保存 AI 配置。</div>
</div>

## 常见现象

### 看不到待批作业

可能是当前页面不是作业页，或者页面没有提供可识别的批阅入口。建议先进入课程内具体的作业相关页面再试。

### 页面识别不稳定

如果页面刚跳转完成，建议稍等片刻后再打开弹窗，让内容脚本完成识别。

## 本地更新扩展的正确方式

如果你修改了扩展代码，推荐用下面这套更新流程：

1. 回到 `edge://extensions/`。
2. 找到当前扩展卡片并点击“重新加载 / Reload”。
3. 回到超星页面再刷新一次。

这样比反复卸载和重新加载目录更稳。

## 参考资料

- [Microsoft Learn: Sideload an extension to install and test it locally](https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading)
