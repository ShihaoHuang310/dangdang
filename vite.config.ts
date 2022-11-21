import { defineConfig ,CommonServerOptions} from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import dotenv,{DotenvParseOutput} from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig((mode) => {
console.log('当前运行环境',mode)
//拼接当前文件名
const envFileName : string ='.env'
const curEnvFileName = `${envFileName}.${mode.mode}`
console.log('curEnvFileName:', curEnvFileName)
const envData = fs.readFileSync(curEnvFileName)
const envMap:DotenvParseOutput = dotenv.parse(envData)
console.log(envMap)
let server :CommonServerOptions={}
if(mode.mode === 'development'){
  server ={
    host:envMap.VITE_HOST,
    port:+envMap.VITE_PORT,
    proxy:{
      [envMap.VITE_BASE_URL]:{
        target: envMap.VITE_PROXY_DOMAIN
      }
    } 

  }
}else if(mode.mode === 'production'){

}
  return {
    plugins: [vue()],
  }
})
