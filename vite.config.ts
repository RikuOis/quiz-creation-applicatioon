import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Viteの設定ファイルです。Reactプラグインを使用するように設定しています。
export default defineConfig({
  plugins: [react()],
})
