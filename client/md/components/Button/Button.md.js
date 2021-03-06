const md = `import React from 'react'
import Ripple from '@piscium2010/lime/Ripple'

export default class Button extends React.Component {
    render() {
        let { children, style: _style, ...rest } = this.props
        let style = { position: 'relative', ..._style }

        return (
            <button {...rest} style={style}>
                {children}
                <Ripple /> {/*parent be position:relative*/}
            </button>
        )
    }
}
`
export default md
