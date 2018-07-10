import * as React from 'react'
// import { dialog } from 'electron'

import FileList, { fileInfo } from './FileList'

interface ITProps { }

interface ITState {
  fileList: Array<fileInfo>
}

export default class App extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      fileList: null
    }
  }
  public render(): JSX.Element {
    let {
      fileList
    } = this.state
    return (
      <div>
        <input type='file' onChange={this.change} multiple />
        <FileList list={fileList}/>
      </div>
    )
  }
  change = (e: any): void => {
    const files = e.target.files
    let fileList: Array<fileInfo> = Array.from(files)
    this.setState({ fileList })
  }
}