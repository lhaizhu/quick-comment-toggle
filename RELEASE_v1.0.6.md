# Quick Comment Toggle v1.0.6 Release Notes

## 🆕 新功能 (New Features)

### Hosts文件支持 (Hosts File Support)
- ✨ 新增对hosts文件的注释支持
- 📝 使用 `#` 字符进行行注释
- 🔍 自动识别名为 `hosts` 的文件（无扩展名）
- ⚡ 支持与其他配置文件相同的批量注释/取消注释功能

## 🛠️ 技术改进 (Technical Improvements)

### 文件识别增强
- 🎯 改进文件类型检测逻辑，支持无扩展名的特殊文件
- 📋 在默认支持文件类型列表中添加 `hosts`
- 🔧 优化 `getFileTypeByExtension` 函数处理特殊文件名

## 📦 版本信息 (Version Info)

- **版本号**: v1.0.6
- **发布日期**: 2025年1月
- **兼容性**: VSCode ^1.74.0
- **文件类型支持**: 31种（新增hosts文件）

## 🚀 使用方法 (How to Use)

1. 打开任意hosts文件（通常位于 `/etc/hosts` 或 `C:\Windows\System32\drivers\etc\hosts`）
2. 选择需要注释的行或直接光标定位
3. 使用快捷键 `Cmd+/` (Mac) 或 `Ctrl+/` (Windows/Linux)
4. 插件将自动添加或移除 `#` 注释符

## 📝 示例 (Example)

```hosts
# 注释行 - 已被注释的hosts条目
127.0.0.1 localhost
# 192.168.1.100 example.com  # 可以快速切换此行的注释状态
```

## 🔄 升级说明 (Upgrade Notes)

- 从v1.0.5升级，无需额外配置
- hosts文件类型已自动添加到支持列表
- 保持所有现有功能和设置不变

---

**感谢使用 Quick Comment Toggle! 🎉**

如有问题或建议，请访问 [GitHub Issues](https://github.com/lhaizhu/quick-comment-toggle/issues)