import React from 'react';
import Button from '../../components/Button'
import '@piscium2010/lime/lime.css'

export default class Disabled extends React.Component {
    render() {
        const style = { marginRight: 'auto' }
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', maxWidth: 600 }}>
                <Button style={style} className='lime-button primary' disabled>Primary</Button>
                <Button style={style} className='lime-button' disabled>Default</Button>
                <Button style={style} className='lime-button text' disabled>Text</Button>
            </div>
        )
    }
}