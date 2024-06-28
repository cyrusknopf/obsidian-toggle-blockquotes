"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class ToggleBlockquotesPlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    toggleBlockquotes() {
        const markdownView = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
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
exports.default = ToggleBlockquotesPlugin;
