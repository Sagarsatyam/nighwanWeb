import { generate } from 'critical';
import path from 'path';

async function extractCriticalCSS() {
  try {
    const result = await generate({
      base: 'dist/',
      src: 'index.html',
      target: {
        css: 'assets/css/critical.css',
        html: 'index.html',
      },
      inline: true,
      dimensions: [
        {
          height: 812,
          width: 375,
        },
        {
          height: 900,
          width: 1200,
        }
      ],
      extract: true,
      ignore: {
        atrule: ['@font-face'],
        decl: (node, value) => /url\(/.test(value),
      },
      rebase: {
        from: 'dist/index.html',
        to: 'dist/assets/css/critical.css',
      },
      penthouse: {
        timeout: 120000,
        renderWaitTime: 2000,
      }
    });

    console.log('Critical CSS extracted successfully');
  } catch (err) {
    console.error('Error extracting critical CSS:', err);
  }
}

extractCriticalCSS();
