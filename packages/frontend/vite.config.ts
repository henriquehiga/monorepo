import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        include: ['@monorepo/common'],
    },
    build: {
        commonjsOptions: {
            include: [/common/, /node_modules/],
        },
    },
});