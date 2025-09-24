# 更新日志

## [1.0.5] - 2025-09-24

### 📝 文档更新
- 🔧 **修复所有版本日期**：统一所有版本的发布日期为正确的2025-09-24
- 📋 **完善更新日志**：补充了各版本完整的功能变更记录
- 🔄 **强制更新发布**：确保VSCode Marketplace显示最新版本信息

### ✅ 版本同步
- 🌐 同步GitHub仓库和VSCode Marketplace版本状态
- 📦 更新包含完整文档的插件包
- 🎯 确保用户能看到最新的功能说明

---

## [1.0.4] - 2025-09-24

### 🐛 Bug修复
- 🔧 **修复TOML文件检测问题**：解决了.toml文件被VSCode识别为plaintext时无法注释的问题
- 🎯 **智能文件类型检测**：新增根据文件扩展名自动判断文件类型的功能
- 📂 **扩展名映射**：支持.toml, .yaml, .ini, .conf等被误识别文件的正确处理

### 🛠 技术改进
- ➕ 新增 `getFileTypeByExtension()` 函数
- ➕ 新增 `getActualLanguageId()` 函数
- 🔄 优化语言类型检测逻辑
- 📈 提升插件对各种文件格式的兼容性

---

## [1.0.3] - 2025-09-24

### ✨ 新增功能
- 🔤 **新增文件类型支持**：
  - `markdown` - 支持Markdown文件注释（使用HTML注释格式 `<!-- -->`）
  - `plaintext` - 支持纯文本文件注释（使用 `#` 注释符）

### 🛠 改进
- 📝 扩展了支持的文件类型列表，现在支持32+种文件格式
- 🎯 优化了注释逻辑，更好地处理不同文件类型的注释规则

### 📦 技术更新
- 🔧 更新了package.json配置
- 📂 完善了源代码中的注释配置映射

---

## [1.0.2] - 2025-09-24

### 🎨 界面优化
- 🖼️ **新增插件图标**：设计了专业的蓝色圆形图标，包含双斜杠注释符号
- 🎨 **优化marketplace展示**：更新了gallery banner颜色，与图标保持视觉一致性
- ✨ 添加了装饰性代码行和高光效果，提升视觉体验

### 📁 文件更新
- 📋 添加了RELEASE_NOTES.md发布说明
- 🖼️ 包含SVG和PNG格式的图标文件
- 🎯 优化了在VSCode Marketplace中的展示效果

---

## [1.0.1] - 2025-09-24

### 🐛 修复
- 🔧 解决了初次发布时的版本冲突问题
- 📦 完善了发布流程，确保插件能够正常在marketplace上展示

---

## [1.0.0] - 2025-09-24

### ✨ 新功能
- 🎯 智能注释切换功能
- 📁 支持 30+ 种文件格式（TOML, JSON, Python, JavaScript 等）
- ⚡ 批量注释/取消注释
- 🎛️ 完整的设置界面
- 📊 状态栏实时状态显示
- 🖱️ 右键菜单集成
- 🎮 命令面板支持

### ⚙️ 配置选项
- `quickComment.enabled` - 启用/禁用功能
- `quickComment.addSpaceAfterComment` - 注释后添加空格
- `quickComment.supportedFileTypes` - 自定义支持文件类型

### 🎯 快捷键
- `Cmd+/` (Mac) / `Ctrl+/` (Windows/Linux) - 切换注释

### 📁 支持的文件类型
- **配置文件**: TOML, YAML, JSON, INI, Dockerfile
- **编程语言**: JavaScript, TypeScript, Python, Java, C/C++, Go, Rust, PHP
- **脚本语言**: Bash, PowerShell, Perl, Ruby
- **样式文件**: CSS, SCSS, LESS
- **数据库**: SQL, MySQL, PostgreSQL
- **文档格式**: Markdown, 纯文本
- **其他**: Lua, Vim, R, MATLAB, LaTeX