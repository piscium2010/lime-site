import React from 'react'
import copyToClipBoard from '../../../util/copyToClipBoard'
import Button from '../Button'
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { cb as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import MessageBox from '../MessageBox'

export default class Markdown extends React.Component {

  onClick = evt => {
    copyToClipBoard(this.props.md)
    MessageBox.show('Code Copied')
  }

  render() {
    return (
      <div className='markdown' style={{ position: 'relative' }}>
        <SyntaxHighlighter language='jsx' style={theme}>{this.props.md}</SyntaxHighlighter>
        <div className='copy'>
            <Button className='lime-button primary' style={{margin: 0}} onClick={this.onClick}>Copy</Button>
        </div>
      </div>
    )
  }
}
