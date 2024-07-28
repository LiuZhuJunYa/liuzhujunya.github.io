import markdownItContainer from 'markdown-it-container';

export default function extendMarkdown(md: any) {
  md.use(markdownItContainer, 'definition', {
    validate: (params: string) => params.trim().match(/^definition\s+(.*)$/),
    render: (tokens: any[], idx: number) => {
      const m = tokens[idx].info.trim().match(/^definition\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="definition"><p class="title">${md.utils.escapeHtml(m[1])}</p>\n`;
      } else {
        return '</div>\n';
      }
    },
  });

  md.use(markdownItContainer, 'theorem', {
    validate: (params: string) => params.trim().match(/^theorem\s+(.*)$/),
    render: (tokens: any[], idx: number) => {
      const m = tokens[idx].info.trim().match(/^theorem\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="theorem"><p class="title">${md.utils.escapeHtml(m[1])}</p>\n`;
      } else {
        return '</div>\n';
      }
    },
  });

  md.use(markdownItContainer, 'algorithm', {
    validate: (params: string) => params.trim().match(/^algorithm\s+(.*)$/),
    render: (tokens: any[], idx: number) => {
      const m = tokens[idx].info.trim().match(/^algorithm\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="algorithm"><p class="title">${md.utils.escapeHtml(m[1])}</p>\n`;
      } else {
        return '</div>\n';
      }
    },
  });

  md.use(markdownItContainer, 'conclusion', {
    validate: (params: string) => params.trim().match(/^conclusion\s+(.*)$/),
    render: (tokens: any[], idx: number) => {
      const m = tokens[idx].info.trim().match(/^conclusion\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="conclusion"><p class="title">${md.utils.escapeHtml(m[1])}</p>\n`;
      } else {
        return '</div>\n';
      }
    },
  });
}
