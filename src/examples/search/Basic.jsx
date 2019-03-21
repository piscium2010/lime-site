import React from 'react'
import Layer from 'lime/Layer'
import '@fortawesome/fontawesome-free/css/all.css'
import 'lime/lime.css'

const iconStyle = { lineHeight: '30px', color: '#a0d911', padding: '0 5px' }

export default class Basic extends React.Component {
    
    render() {
        return (
            <div>
                <div className='lime-select-input'>
                    <input />
                    <i class="fas fa-search" style={iconStyle}></i>
                </div>
            </div>
        )
    }
}