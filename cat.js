#!/usr/bin/env node
'use strict';
const fs = require('fs');
// Maybe I could make this a JS parser and color code the output!

for (const [index, fileName] of process.argv.entries()) {
    if (index <= 1) {
        continue;
    } else {
        let fullFileStr = '';
        fs.createReadStream(fileName)
            .on('data', (chunk) => {
                fullFileStr += chunk;
            })
            .on('error', (err) => { process.stderr.write(`\nERROR: ${err.message}\n`); })
            .on('close', () => {
                process.stdout.write(`${fileName}:\n\n`);
                process.stdout.write(fullFileStr);
                // Buffer the screen
                process.stdout.write('\n\n');
            });
    }
}

