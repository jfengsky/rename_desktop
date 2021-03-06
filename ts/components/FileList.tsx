/**
 * 文件列表
 */

import * as React from 'react'

import { rename } from '../util/files'

export interface fileInfo {
  lastModified: number
  lastModifiedDate: any
  // 文件名
  name: string
  // 文件路径
  path: string
  // 文件大小
  size: number
  // 文件类型
  type: string
  webkitRelativePath: any
}

const FileItem = ({ data }: any): JSX.Element => {
  let {
    name,
    size
  }: fileInfo = data

  return (
    <li>
      <b>{name}</b>
      <em>{size}</em>
    </li>
  )
}

interface ITProps {
  list: Array<fileInfo>
}

interface ITState { }

export default class FileList extends React.Component<ITProps, ITState> {
  public render(): JSX.Element {
    let {
      list
    } = this.props
    return (
      <div>
        <input type='text' ref='newName' onChange={this.changeNewName} />
        <button onClick={this.changeName}>改名</button>
        <ul>
          <li>
            <b>文件名</b>
            <em>大小</em>
          </li>
          {
            !!list && list.map((item: fileInfo, index: number) => <FileItem key={index} data={item} />)
          }
        </ul>
      </div>
    )
  }

  changeNewName = (e: any) => {
    let newName: string = (this.refs.newName as HTMLInputElement).value
    console.log(newName)
    
  }

  changeName = async (e: any) => {
    let file: fileInfo = this.props.list[0]
    let newName: string = (this.refs.newName as HTMLInputElement).value
    let { path, name } = file
    let result = await rename({ path, name, newName })

  }
}