# GitHub Release 发布文档

## v1.0.5 发布说明

### 🎉 版本亮点
Quick Comment Toggle 插件的最新稳定版本，修复了重要的文件类型检测问题，提供更好的用户体验。

### 🐛 本版本修复 (v1.0.4-v1.0.5)
- **TOML文件检测问题**：修复了.toml文件被VSCode错误识别为plaintext时无法注释的问题
- **智能类型检测**：新增根据文件扩展名自动判断文件类型的功能
- **文档日期修正**：统一所有版本发布日期为2025-09-24

### ✨ 核心功能 (完整功能)
- 🎯 **智能注释切换**：一键在注释和非注释状态之间切换
- ⚡ **批量操作**：支持选中多行进行批量注释/取消注释
- 🔤 **32+文件类型**：支持主流编程语言、配置文件、文档格式
- 🎛️ **丰富配置**：可自定义支持文件类型、注释格式等
- 📊 **状态显示**：状态栏实时显示插件启用状态

### 📁 支持的文件类型
#### 编程语言
JavaScript, TypeScript, Python, Java, C/C++, C#, Go, Rust, PHP, Swift, Kotlin

#### 脚本和配置
Bash, Shell, PowerShell, Perl, Ruby, YAML, TOML, INI, Dockerfile, Properties

#### 标记和样式
HTML, XML, SVG, CSS, SCSS, SASS, LESS, Markdown

#### 数据和其他
JSON, JSONC, SQL, MySQL, PostgreSQL, Lua, Vim, R, MATLAB, LaTeX, 纯文本

### 🎯 快捷键
- **Mac**: `Cmd + /`
- **Windows/Linux**: `Ctrl + /`

### ⚙️ 配置选项
```json
{
  "quickComment.enabled": true,
  "quickComment.addSpaceAfterComment": true,
  "quickComment.supportedFileTypes": [/* 自定义支持的文件类型 */]
}
```

---

## 📦 发布文件

### 下载说明
1. 从本页面 **Assets** 部分下载 `quick-comment-toggle-1.0.5.vsix`
2. 在VSCode中按 `Ctrl+Shift+P` 打开命令面板
3. 输入 "Extensions: Install from VSIX"
4. 选择下载的 .vsix 文件进行安装

### 或者从VSCode商店安装
在VSCode扩展商店搜索 "Quick Comment Toggle" 即可安装最新版本。

---

## 🔄 版本历史

| 版本 | 日期 | 主要更新 |
|------|------|----------|
| v1.0.5 | 2025-09-24 | 文档更新，日期修正 |
| v1.0.4 | 2025-09-24 | 修复TOML文件检测问题 |
| v1.0.3 | 2025-09-24 | 新增markdown和plaintext支持 |
| v1.0.2 | 2025-09-24 | 添加图标和界面优化 |
| v1.0.1 | 2025-09-24 | 初次发布修复 |
| v1.0.0 | 2025-09-24 | 核心功能发布 |

---

## 🐛 问题反馈
如遇到问题，请在 [Issues](https://github.com/lhaizhu/quick-comment-toggle/issues) 页面反馈。

## ⭐ 支持项目
如果觉得插件有用，请给项目点个星星！