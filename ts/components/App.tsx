import * as React from 'react'

interface ITProps { }

interface ITState { }

export default class App extends React.Component<ITProps, ITState> {
    public render(): JSX.Element {
        return (
            <div>
                <input type='file' onChange={this.change} />
            </div>
        )
    }
    change = (e: any):void => {
        const files = e.target.files
        console.log(files)
    }
}