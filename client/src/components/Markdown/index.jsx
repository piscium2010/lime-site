import React from 'react'
import copyToClipBoard from '../../../util/copyToClipBoard'
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { cb as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class Markdown extends React.Component {

  onClick = evt => {
    const str = document.getElementById(this.id).textContent
    copyToClipBoard(str)
  }

  render() {
    return (
      <div className='markdown' style={{ position: 'relative' }}>
        <SyntaxHighlighter language='jsx' style={theme}>{this.props.md}</SyntaxHighlighter>
        <div className='copy'>
            <button className='lime-button primary' onClick={this.onClick}>Copy</button>
        </div>
      </div>
    )
  }
}
