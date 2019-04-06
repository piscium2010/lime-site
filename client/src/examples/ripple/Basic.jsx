import React from 'react'
import Ripple from '@piscium2010/lime/Ripple'



export default class Basic extends React.Component {
    render() {
        const style = { cursor: 'pointer', display: 'inline-block', width:'50%', height:300, position: 'relative' }
        return (
            <section>
                <div className='lime-card' style={style}>
                    Dark
                    <Ripple dark />
                </div>
                <div className='lime-card' style={{...style, background:'#9dd411', color:'white'}}>
                    Light
                    <Ripple />
                </div>
            </section>
        )
    }
}