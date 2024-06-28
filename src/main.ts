import { Plugin, MarkdownView } from 'obsidian';

export default class ToggleBlockquotesPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'toggle-blockquotes',
            name: 'Toggle Blockquotes',
            callback: () => this.toggleBlockquotes(),
            hotkeys: [
                {
                    modifiers: ["Ctrl", "Shift"],
                    key: "B",
                },
            ],
        });
    }

    toggleBlockquotes() {
        const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (markdownView) {
            const previewMode = markdownView.getMode() === 'preview';
            if (previewMode) {
                const previewElement = markdownView.previewMode.containerEl;
                const blockquotes = previewElement.querySelectorAll('blockquote');
                blockquotes.forEach(blockquote => {
                    const paragraphs = blockquote.querySelectorAll('p');
                    paragraphs.forEach(p => {
                        p.style.opacity = p.style.opacity === '0' ? '1' : '0';
                    });
                });
            }
        }
    }
}
