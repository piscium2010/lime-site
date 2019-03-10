import React from 'react';

export default class Markdown extends React.Component {
  render() {
    return (<div className='markdown' dangerouslySetInnerHTML={{ __html: this.props.html }} />)
  }
}
