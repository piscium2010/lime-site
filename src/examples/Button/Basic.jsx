import React from 'react';
import Ripple from 'lime/Ripple'

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent: 'space-around', maxWidth: 500}}>
                <button className='sd-button primary sd-raised'>Lime<Ripple/></button>
                <button className='sd-button primary'>Lime<Ripple/></button>
                <button className='sd-button'>Lime<Ripple/></button>
                <button className='sd-button text'>Lime<Ripple/></button>
            </div>
        )
    }
}