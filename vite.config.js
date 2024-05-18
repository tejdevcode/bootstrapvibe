import { resolve } from 'path'

export default {
   root: resolve(__dirname, 'src'),
   build: {
      outDir: '../dist'
   },
   server: {
      port: 3003,
      hot: true
   }
}