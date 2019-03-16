import React from 'react'
import Ripple from 'lime/Ripple'

export default class Button extends React.Component {
    render() {
        let { children, style: _style, ...rest } = this.props
        let position = { position: 'relative' }
        let style = Object.assign(position, _style)

        return (
            <button {...rest} style={style}>
                {children}
                <Ripple /> {/*parent be position:relative, overflow: hidden*/}
            </button>
        )
    }
}