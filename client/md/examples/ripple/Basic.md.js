const md = `import React from 'react'
import Ripple from '@piscium2010/lime/Ripple'



export default class Basic extends React.Component {
    render() {
        const style = { cursor: 'pointer', display: 'inline-block', width:'40%', height:300, position: 'relative', padding: 10 }
        return (
            <section>
                <div className='lime-raised' style={style}>
                    Dark
                    <Ripple dark />
                </div>
                <div className='lime-raised' style={{...style, background:'#9dd411', color:'white'}}>
                    Light
                    <Ripple />
                </div>
            </section>
        )
    }
}`
export default md
