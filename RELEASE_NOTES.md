# 🎉 Quick Comment Toggle v1.0.0 发布文档

## 📋 版本信息

- **版本号**: v1.0.0
- **发布日期**: 2024-12-XX
- **项目名称**: Quick Comment Toggle
- **GitHub仓库**: https://github.com/lhaizhu/quick-comment-toggle
- **安装包**: `quick-comment-toggle-1.0.0.vsix` (8.96 KB)

## 🚀 产品概述

Quick Comment Toggle 是一个功能强大的 VSCode 扩展插件，专为提高开发者效率而设计。它提供智能的批量注释切换功能，支持30+种主流文件格式，让代码注释变得简单高效。

## ✨ 核心特性

### 🎯 智能注释切换
- 一键添加或取消注释
- 自动检测文件类型并选择合适的注释符
- 智能识别已注释内容，避免重复注释

### 📁 广泛的格式支持
支持30+种文件格式，包括但不限于：

| 类别 | 格式 | 注释符 |
|------|------|--------|
| **配置文件** | TOML, YAML, JSON, INI, Dockerfile | `#`, `//` |
| **编程语言** | JavaScript, TypeScript, Python, Java, C/C++, Go, Rust, PHP | `//`, `#` |
| **脚本语言** | Bash, PowerShell, Perl, Ruby | `#`, `//` |
| **样式文件** | CSS, SCSS, LESS | `//`, `/* */` |
| **数据库** | SQL, MySQL, PostgreSQL | `--` |
| **其他** | Lua, Vim, R, MATLAB, LaTeX | 各种注释符 |

### ⚡ 高效的批量操作
- **单行注释**: 光标置于任意行，按快捷键即可
- **多行注释**: 选中多行代码，一键批量处理
- **智能切换**: 自动判断是添加注释还是取消注释

### 🎛️ 灵活的配置选项
- `quickComment.enabled` - 启用/禁用插件功能
- `quickComment.addSpaceAfterComment` - 控制注释符后是否添加空格
- `quickComment.supportedFileTypes` - 自定义支持的文件类型列表

### 📊 完整的UI集成
- **状态栏显示**: 实时显示插件启用状态，点击快速打开设置
- **右键菜单**: 编辑器右键菜单集成注释切换选项
- **命令面板**: 支持通过命令面板调用功能
- **设置界面**: 完整的VSCode设置页面集成

## 🎮 使用方法

### 基本操作
1. **快捷键**: `Cmd+/` (Mac) 或 `Ctrl+/` (Windows/Linux)
2. **右键菜单**: 在编辑器中右键选择"批量切换注释"
3. **命令面板**: `Ctrl+Shift+P` → 搜索"批量切换注释"

### 配置设置
1. 打开VSCode设置 (`Cmd+,` / `Ctrl+,`)
2. 搜索 `quickComment`
3. 根据需要调整配置选项

### 使用示例

**TOML配置文件:**
```toml
# 按快捷键前
[database]
server = "localhost"
port = 5432

# 按快捷键后 → 变为注释
# [database]
# server = "localhost"
# port = 5432
```

**JSON文件:**
```json
// 按快捷键前
{
  "name": "demo",
  "version": "1.0.0"
}

// 按快捷键后 → 变为注释
{
  // "name": "demo",
  // "version": "1.0.0"
}
```

## 📦 安装方式

### 方法1: GitHub Release安装 (推荐)
1. 访问 [Release页面](https://github.com/lhaizhu/quick-comment-toggle/releases)
2. 下载最新的 `quick-comment-toggle-1.0.0.vsix` 文件
3. 在VSCode中按 `Ctrl+Shift+P`
4. 输入 `Extensions: Install from VSIX...`
5. 选择下载的安装包文件

### 方法2: 源码构建
```bash
# 克隆项目
git clone https://github.com/lhaizhu/quick-comment-toggle.git
cd quick-comment-toggle

# 安装依赖并构建
npm install
npm run compile
npm run package

# 安装生成的.vsix文件
```

## 🛠️ 技术规格

- **开发语言**: TypeScript
- **目标平台**: VSCode 1.74.0+
- **打包大小**: 8.96 KB (7个文件)
- **依赖关系**: 无外部运行时依赖
- **兼容系统**: Windows, macOS, Linux

## 🎯 设计亮点

### 用户体验优先
- 零学习成本，符合VSCode用户习惯的快捷键
- 智能识别，无需手动选择注释类型
- 可视化状态反馈，操作结果一目了然

### 性能优化
- 轻量级设计，不影响VSCode启动速度
- 高效的文件类型识别算法
- 最小化内存占用

### 可扩展性
- 模块化代码架构，便于添加新的文件格式支持
- 开放的配置系统，用户可自定义行为
- 标准的VSCode扩展API，确保兼容性

## 📄 许可证

本项目采用 [MIT 许可证](https://github.com/lhaizhu/quick-comment-toggle/blob/main/LICENSE)，开源免费使用。

## 🤝 贡献与反馈

- **Bug报告**: [GitHub Issues](https://github.com/lhaizhu/quick-comment-toggle/issues)
- **功能建议**: [GitHub Issues](https://github.com/lhaizhu/quick-comment-toggle/issues)
- **代码贡献**: [贡献指南](https://github.com/lhaizhu/quick-comment-toggle/blob/main/CONTRIBUTING.md)

## 🎊 发布总结

Quick Comment Toggle v1.0.0 是一个功能完整、性能优异的VSCode注释插件。它解决了开发者在多种文件格式中快速切换注释的痛点，提供了直观易用的操作体验。

**立即下载体验，让代码注释变得更加高效！**

---

*🔗 项目链接*: https://github.com/lhaizhu/quick-comment-toggle
*📦 下载地址*: [Releases](https://github.com/lhaizhu/quick-comment-toggle/releases)
*⭐ 如果觉得好用，请给个Star支持！*