# 贡献指南

感谢你对 Quick Comment Toggle 的关注！我们欢迎各种形式的贡献。

## 🚀 快速开始

1. **Fork 项目**
   ```bash
   git clone https://github.com/lhaizhu/quick-comment-toggle.git
   cd quick-comment-toggle
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **开发环境**
   ```bash
   npm run watch  # 监听文件变化
   code .         # 在 VSCode 中打开
   # 按 F5 启动调试
   ```

## 📝 提交规范

### Commit 消息格式
```
<类型>: <描述>

[可选的正文]
```

**类型包括：**
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建或工具变更

**示例：**
```
feat: 添加对 Rust 文件的支持
fix: 修复 TOML 文件注释空格问题
docs: 更新安装说明
```

## 🐛 报告 Bug

创建 Issue 时请提供：
- 操作系统和版本
- VSCode 版本
- 插件版本
- 重现步骤
- 期望行为 vs 实际行为

## 💡 功能请求

提交新功能建议时请说明：
- 功能描述
- 使用场景
- 可能的实现方案

## 🔧 代码规范

- 使用 TypeScript
- 遵循现有代码风格
- 添加必要的注释
- 确保类型安全

## ✅ Pull Request

1. 确保代码能够编译通过
2. 更新相关文档
3. 添加测试（如适用）
4. 确保 PR 描述清晰

感谢你的贡献！🎉