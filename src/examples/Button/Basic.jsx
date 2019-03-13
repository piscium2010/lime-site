import React from 'react';
import Ripple from 'lime/Ripple'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <button className='sd-button primary sd-raised'>Raised<Ripple /></button>
                <button className='sd-button primary'>Primary<Ripple /></button>
                <button className='sd-button'>default<Ripple /></button>
                <button className='sd-button text'>text<Ripple /></button>
                <button className='sd-button primary' disabled>disabled<Ripple /></button>
                <button className='sd-button text' disabled>disabled<Ripple /></button>
            </div>
        )
    }
}