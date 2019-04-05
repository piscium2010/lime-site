import React from 'react'
import Ripple from '@piscium2010/lime/Ripple'



export default class Basic extends React.Component {
    render() {
        const style = { cursor: 'pointer', display: 'inline', position: 'relative', padding: 10 }
        return (
            <p>
                <div className='lime-card' style={style}>
                    Click Me
                    <Ripple dark />
                </div>
            </p>
        )
    }
}