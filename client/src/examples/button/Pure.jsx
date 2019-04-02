import React from 'react';
import '@piscium2010/lime/lime.css'

export default class Pure extends React.Component {
    render() {
        let style = { marginRight: 10 }
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 600 }}>
                <button style={style} className='lime-button primary lime-raised'>Primary</button>
                <button style={style} className='lime-button primary'>Primary</button>
                <button style={style} className='lime-button'>Default</button>
                <button style={style} className='lime-button text'>Text</button>
                <button style={style} className='lime-button primary' disabled>Primary</button>
                <button style={style} className='lime-button' disabled>Default</button>
                <button style={style} className='lime-button text' disabled>Text</button>
            </div>
        )
    }
}