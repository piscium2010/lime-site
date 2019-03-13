import React from 'react';
import Button from '../../components/Button'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <Button className='sd-button primary sd-raised'>Raised</Button>
                <Button className='sd-button primary'>Primary</Button>
                <Button className='sd-button'>Default</Button>
                <Button className='sd-button text'>Text</Button>
                <Button className='sd-button primary' disabled>Disabled</Button>
                <Button className='sd-button text' disabled>Disabled</Button>
            </div>
        )
    }
}