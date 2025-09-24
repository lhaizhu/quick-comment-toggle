# Quick Comment Toggle

> 🚀 一键批量注释/取消注释，支持 30+ 种文件格式的 VSCode 扩展插件

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/lhaizhu.quick-comment-toggle)](https://marketplace.visualstudio.com/items?itemName=lhaizhu.quick-comment-toggle)

## ✨ 主要特性

- 🎯 **智能注释切换** - 一键添加/取消注释
- 📁 **多格式支持** - 支持 TOML、JSON、Python、JavaScript 等 30+ 种文件类型
- ⚡ **批量操作** - 选中多行代码，一键批量注释
- 🎛️ **灵活配置** - 可自定义启用状态、空格设置、支持文件类型
- 📊 **状态显示** - 状态栏实时显示插件状态
- 🖱️ **多种触发** - 快捷键、右键菜单、命令面板

## 🚀 快速安装

### 方法 1：VSCode 扩展市场（推荐）
1. 打开 VSCode
2. 按 `Ctrl+Shift+X` 打开扩展面板
3. 搜索 "Quick Comment Toggle"
4. 点击安装

### 方法 2：下载安装包
1. 从 [Releases](https://github.com/lhaizhu/quick-comment-toggle/releases) 下载最新的 `.vsix` 文件
2. 打开 VSCode，按 `Ctrl+Shift+P`
3. 输入 `Extensions: Install from VSIX...`
4. 选择下载的 `.vsix` 文件

## 📖 使用方法

### 基本操作
- **快捷键**：`Cmd+/` (Mac) 或 `Ctrl+/` (Windows/Linux)
- **单行注释**：光标置于行上，按快捷键
- **批量注释**：选中多行，按快捷键
- **取消注释**：在已注释行上再次按快捷键

### 示例效果

**TOML 配置文件：**
```toml
# 按快捷键前
[database]
server = "localhost"
port = 5432

# 按快捷键后
# [database]
# server = "localhost"
# port = 5432
```

**JSON 文件：**
```json
// 按快捷键前
{
  "name": "demo",
  "version": "1.0.0"
}

// 按快捷键后
{
  // "name": "demo",
  // "version": "1.0.0"
}
```

## ⚙️ 配置选项

在 VSCode 设置中搜索 `quickComment` 进行配置：

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `quickComment.enabled` | `true` | 启用/禁用插件功能 |
| `quickComment.addSpaceAfterComment` | `true` | 注释符后是否添加空格 |
| `quickComment.supportedFileTypes` | `[...]` | 支持的文件类型列表 |

## 📁 支持的文件类型

| 类别 | 文件格式 | 注释符 |
|------|----------|--------|
| **配置文件** | TOML, YAML, JSON, INI | `#`, `//` |
| **编程语言** | JavaScript, TypeScript, Python, Java, C/C++, Go | `//`, `#` |
| **脚本语言** | Bash, PowerShell, Perl, Ruby | `#`, `//` |
| **样式文件** | CSS, SCSS, LESS | `//`, `/* */` |
| **数据库** | SQL, MySQL, PostgreSQL | `--` |
| **其他** | Lua, Vim, R, MATLAB, LaTeX | 各种注释符 |

<details>
<summary>完整支持列表</summary>

```
javascript, typescript, python, java, c, cpp, csharp, go, rust, php,
swift, kotlin, bash, shell, sh, zsh, fish, powershell, perl, ruby,
yaml, yml, toml, ini, conf, properties, dockerfile, gitignore,
html, xml, svg, css, scss, sass, less, json, jsonc,
sql, mysql, postgresql, lua, vim, r, matlab, tex, latex
```
</details>

## 🛠️ 开发

```bash
# 克隆项目
git clone https://github.com/lhaizhu/quick-comment-toggle.git
cd quick-comment-toggle

# 安装依赖
npm install

# 编译代码
npm run compile

# 打包插件
npm run package

# 开发模式
npm run watch
```

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📞 反馈与支持

- 🐛 [报告 Bug](https://github.com/lhaizhu/quick-comment-toggle/issues)
- 💡 [功能建议](https://github.com/lhaizhu/quick-comment-toggle/issues)
- ⭐ 觉得好用请给个 Star！

---

> 💡 **提示**：安装后会在状态栏显示插件状态，点击可快速打开设置面板