import React from 'react';
import Button from '../../components/Button'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <Button className='lime-button primary lime-raised'>Raised</Button>
                <Button className='lime-button primary'>Primary</Button>
                <Button className='lime-button'>Default</Button>
                <Button className='lime-button text'>Text</Button>
                <Button className='lime-button primary' disabled>Disabled</Button>
                <Button className='lime-button text' disabled>Disabled</Button>
            </div>
        )
    }
}