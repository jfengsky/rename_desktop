
import * as fs from 'fs'

interface renameParam {
  path: string
  name: string
  newName: string
}
export const rename = async ({ path, name, newName }: renameParam) => {
  let fullPath = path.replace(/(\w+.\w+)$/ig, '')
  let extName = name.replace(/^\w+/ig,'')

  // TODO 查找该目录下有没有相同的源文件名及扩展名
  // TODO 查找该目录下有没有相同的目标文件名及扩展名

  let result = await fs.renameSync(path, `${fullPath}/${newName}${extName}`)
  return result
}