import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import en from './src/en/index.json'

export default defineConfig({
    plugins: [
        viteSingleFile({
            removeViteModuleLoader: true,
        }),
    ],
    define: Object.fromEntries(
        Object.entries(en).map(([key, value]) => [
            `import.meta.env.VITE_${key.replace('-', '_').toUpperCase()}`,
            value,
        ]),
    ),
})
