const md = `import React from 'react'

const style = {
    color: '#03121a',
    fontWeight: 'bold',
    fontSize: 'xx-large',
    margin: 0
}

export default class PageHeader extends React.Component {
    render() {
        const { title, desc = '' } = this.props
        return (
            <div style={{ margin: '60px 0 100px 0' }}>
                <h2 style={style}>{title}</h2>
                <p>{desc}</p>
            </div>
        )
    }
}
`
export default md
