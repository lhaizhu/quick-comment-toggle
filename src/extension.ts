import * as vscode from 'vscode';

// 不同文件类型的注释配置
const commentConfigs: { [key: string]: { line?: string; block?: { start: string; end: string } } } = {
    // 编程语言
    'javascript': { line: '//', block: { start: '/*', end: '*/' } },
    'typescript': { line: '//', block: { start: '/*', end: '*/' } },
    'python': { line: '#' },
    'markdown': { block: { start: '<!--', end: '-->' } },
    'plaintext': { line: '#' },
    'java': { line: '//', block: { start: '/*', end: '*/' } },
    'c': { line: '//', block: { start: '/*', end: '*/' } },
    'cpp': { line: '//', block: { start: '/*', end: '*/' } },
    'csharp': { line: '//', block: { start: '/*', end: '*/' } },
    'go': { line: '//', block: { start: '/*', end: '*/' } },
    'rust': { line: '//', block: { start: '/*', end: '*/' } },
    'php': { line: '//', block: { start: '/*', end: '*/' } },
    'swift': { line: '//', block: { start: '/*', end: '*/' } },
    'kotlin': { line: '//', block: { start: '/*', end: '*/' } },

    // 脚本语言
    'bash': { line: '#' },
    'shell': { line: '#' },
    'sh': { line: '#' },
    'zsh': { line: '#' },
    'fish': { line: '#' },
    'powershell': { line: '#', block: { start: '<#', end: '#>' } },
    'perl': { line: '#' },
    'ruby': { line: '#', block: { start: '=begin', end: '=end' } },

    // 配置文件
    'yaml': { line: '#' },
    'yml': { line: '#' },
    'toml': { line: '#' },
    'ini': { line: ';' },
    'conf': { line: '#' },
    'properties': { line: '#' },
    'dockerfile': { line: '#' },
    'gitignore': { line: '#' },
    'hosts': { line: '#' },

    // 标记语言
    'html': { block: { start: '<!--', end: '-->' } },
    'xml': { block: { start: '<!--', end: '-->' } },
    'svg': { block: { start: '<!--', end: '-->' } },

    // 样式
    'css': { block: { start: '/*', end: '*/' } },
    'scss': { line: '//', block: { start: '/*', end: '*/' } },
    'sass': { line: '//' },
    'less': { line: '//', block: { start: '/*', end: '*/' } },

    // 数据格式
    'json': { line: '//' }, // JSON5 支持
    'jsonc': { line: '//', block: { start: '/*', end: '*/' } },

    // SQL
    'sql': { line: '--', block: { start: '/*', end: '*/' } },
    'mysql': { line: '--', block: { start: '/*', end: '*/' } },
    'postgresql': { line: '--', block: { start: '/*', end: '*/' } },

    // 其他
    'lua': { line: '--', block: { start: '--[[', end: ']]' } },
    'vim': { line: '"' },
    'r': { line: '#' },
    'matlab': { line: '%', block: { start: '%{', end: '%}' } },
    'tex': { line: '%' },
    'latex': { line: '%' }
};

function getCommentConfig(languageId: string) {
    const config = commentConfigs[languageId] || commentConfigs[languageId.toLowerCase()];
    if (config) {
        return config;
    }
    return { line: '#' }; // 默认使用 # 注释
}

function isLineCommented(line: string, commentChar: string): boolean {
    const trimmed = line.trim();
    return trimmed.startsWith(commentChar);
}

function toggleLineComment(line: string, commentChar: string): string {
    const config = vscode.workspace.getConfiguration('quickComment');
    const addSpace = config.get<boolean>('addSpaceAfterComment', true);

    const trimmed = line.trim();
    if (trimmed.startsWith(commentChar)) {
        // 取消注释
        const commentIndex = line.indexOf(commentChar);
        const beforeComment = line.substring(0, commentIndex);
        const afterComment = line.substring(commentIndex + commentChar.length);
        // 如果注释符后面有一个空格，也要去掉
        const cleanAfter = afterComment.startsWith(' ') ? afterComment.substring(1) : afterComment;
        return beforeComment + cleanAfter;
    } else {
        // 添加注释
        const leadingWhitespace = line.match(/^\s*/)?.[0] || '';
        const content = line.substring(leadingWhitespace.length);
        const space = addSpace && content ? ' ' : '';
        return leadingWhitespace + commentChar + space + content;
    }
}

function isExtensionEnabled(): boolean {
    const config = vscode.workspace.getConfiguration('quickComment');
    return config.get<boolean>('enabled', true);
}

function isSupportedFileType(languageId: string): boolean {
    const config = vscode.workspace.getConfiguration('quickComment');
    const supportedTypes = config.get<string[]>('supportedFileTypes', []);
    return supportedTypes.includes(languageId) || supportedTypes.includes(languageId.toLowerCase());
}

function getFileTypeByExtension(fileName: string): string | null {
    // 特殊文件名处理（无扩展名的文件）
    const baseName = fileName.split('/').pop() || fileName;
    if (baseName === 'hosts') {
        return 'hosts';
    }

    const extension = fileName.split('.').pop()?.toLowerCase();
    const extensionMap: { [key: string]: string } = {
        'toml': 'toml',
        'yaml': 'yaml',
        'yml': 'yaml',
        'json': 'json',
        'js': 'javascript',
        'ts': 'typescript',
        'py': 'python',
        'md': 'markdown',
        'txt': 'plaintext',
        'ini': 'ini',
        'conf': 'conf',
        'sh': 'bash',
        'sql': 'sql',
        'css': 'css',
        'scss': 'scss',
        'html': 'html',
        'xml': 'xml'
    };
    return extension ? extensionMap[extension] || null : null;
}

function getActualLanguageId(document: vscode.TextDocument): string {
    let languageId = document.languageId;

    // 如果VSCode识别为plaintext，尝试根据文件扩展名判断真实类型
    if (languageId === 'plaintext') {
        const detectedType = getFileTypeByExtension(document.fileName);
        if (detectedType) {
            languageId = detectedType;
        }
    }

    return languageId;
}

export function activate(context: vscode.ExtensionContext) {
    // 注册切换注释命令
    const toggleCommentDisposable = vscode.commands.registerCommand('quickComment.toggleComment', () => {
        if (!isExtensionEnabled()) {
            vscode.window.showInformationMessage('批量注释功能已禁用，请在设置中启用');
            return;
        }

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;
        const selection = editor.selection;
        const languageId = getActualLanguageId(document);

        if (!isSupportedFileType(languageId)) {
            vscode.window.showInformationMessage(`文件类型 "${languageId}" 未在支持列表中，请在设置中添加`);
            return;
        }

        const commentConfig = getCommentConfig(languageId);
        const commentChar = commentConfig.line;

        if (!commentChar) {
            vscode.window.showInformationMessage(`暂不支持 ${languageId} 文件类型的行注释`);
            return;
        }

        if (selection.isEmpty) {
            // 如果没有选择，注释当前行
            const currentLine = selection.active.line;
            const lineText = document.lineAt(currentLine).text;
            const newText = toggleLineComment(lineText, commentChar);

            const range = new vscode.Range(currentLine, 0, currentLine, lineText.length);
            editor.edit(editBuilder => {
                editBuilder.replace(range, newText);
            });
        } else {
            // 如果有选择，注释选中的行
            const startLine = selection.start.line;
            const endLine = selection.end.line;

            // 检查选中行是否都已注释
            let allCommented = true;
            for (let i = startLine; i <= endLine; i++) {
                const lineText = document.lineAt(i).text;
                if (lineText.trim() && !isLineCommented(lineText, commentChar)) {
                    allCommented = false;
                    break;
                }
            }

            editor.edit(editBuilder => {
                for (let i = startLine; i <= endLine; i++) {
                    const lineText = document.lineAt(i).text;
                    if (lineText.trim()) { // 跳过空行
                        const newText = allCommented
                            ? toggleLineComment(lineText, commentChar) // 取消注释
                            : toggleLineComment(lineText, commentChar); // 添加注释

                        const range = new vscode.Range(i, 0, i, lineText.length);
                        editBuilder.replace(range, newText);
                    }
                }
            });
        }
    });

    // 注册打开设置命令
    const openSettingsDisposable = vscode.commands.registerCommand('quickComment.openSettings', () => {
        vscode.commands.executeCommand('workbench.action.openSettings', 'quickComment');
    });

    // 注册状态栏项
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'quickComment.openSettings';
    statusBarItem.tooltip = '点击打开批量注释设置';

    function updateStatusBar() {
        const enabled = isExtensionEnabled();
        statusBarItem.text = `$(comment) 批量注释: ${enabled ? '启用' : '禁用'}`;
        statusBarItem.backgroundColor = enabled ? undefined : new vscode.ThemeColor('statusBarItem.warningBackground');
        statusBarItem.show();
    }

    // 初始化状态栏
    updateStatusBar();

    // 监听配置变化
    const configDisposable = vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('quickComment')) {
            updateStatusBar();
        }
    });

    context.subscriptions.push(toggleCommentDisposable, openSettingsDisposable, statusBarItem, configDisposable);

    // 显示欢迎信息
    vscode.window.showInformationMessage(
        '批量注释插件已激活！使用 Cmd+/ (Mac) 或 Ctrl+/ (Windows/Linux) 来切换注释',
        '打开设置'
    ).then(selection => {
        if (selection === '打开设置') {
            vscode.commands.executeCommand('quickComment.openSettings');
        }
    });
}

export function deactivate() {}