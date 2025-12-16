import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SimulinkParserService {

    parse(code: string) {
        const blocks = [];
        const connections = [];

        // --- Extract block names ---
        const blockRegex = /add_block\(.*?,\s*\[.*?\/(.*?)\]/g;
        let match;
        while ((match = blockRegex.exec(code)) !== null) {
            blocks.push({
                id: match[1],
                text: match[1],
                x: 100,
                y: 100,
            });
        }

        // --- Extract positions if available ---
        const posRegex = /'Position',\s*\[(.*?)\]/g;
        const blockIds = blocks.map(b => b.id);
        let index = 0;
        while ((match = posRegex.exec(code)) !== null && index < blockIds.length) {
            const [x, y] = match[1].split(',').map(v => Number(v.trim()));
            blocks[index].x = x;
            blocks[index].y = y;
            index++;
        }

        // --- Extract connections ---
        const connRegex = /add_line\(.*?,\s*'(.*?)\/\d+',\s*'(.*?)\/\d+'\)/g;
        while ((match = connRegex.exec(code)) !== null) {
            connections.push({
                from: match[1],
                to: match[2],
            });
        }

        return { blocks, connections };
    }
}
