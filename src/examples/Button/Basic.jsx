import React from 'react';
import Button from '../../components/Button'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    render() {
        let style = { marginRight: 10 }
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 600 }}>
                <Button style={style} className='lime-button primary lime-raised'>Primary</Button>
                <Button style={style} className='lime-button primary'>Primary</Button>
                <Button style={style} className='lime-button'>Default</Button>
                <Button style={style} className='lime-button text'>Text</Button>
                <Button style={style} className='lime-button primary' disabled>Primary</Button>
                <Button style={style} className='lime-button' disabled>Default</Button>
                <Button style={style} className='lime-button text' disabled>Text</Button>
            </div>
        )
    }
}