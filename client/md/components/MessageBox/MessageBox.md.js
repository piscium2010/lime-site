const md = `import React from 'react'
import ReactDOM from 'react-dom'
import '@piscium2010/lime/lime.css'

const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    pointerEvent: 'none'
}

const containerStyle = {
    borderRadius: 4,
    margin: 15,
    padding: '14px 16px',
    background: '#323232',
    color: 'rgba(255,255,255,.7)',
    fontSize: 14,
    minWidth: 200
}

export default class MessageBox extends React.Component {

    static show(msg, duration = 1300) {
        const node = document.createElement('div')
        document.body.appendChild(node)
        ReactDOM.render(<MessageBox text={msg} />, node)
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(node)
            document.body.removeChild(node)
        }, duration)
    }

    render() {
        return (
            <div style={wrapperStyle} >
                <div style={containerStyle} className='lime-raised message-box'>{this.props.text}</div>
            </div>
        )
    }
}
`
export default md
