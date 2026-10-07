import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      input: [
        'index.html',
        'privacy-policy.html',
        'terms-of-service.html',
        'support.html',
        'release-notes.html',
      ].map((page) => fileURLToPath(new URL(page, import.meta.url))),
    },
  },
});
