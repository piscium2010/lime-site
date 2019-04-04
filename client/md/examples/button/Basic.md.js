const md = `import React from 'react';
import Button from '../../components/Button'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    render() {
        const style = { marginRight: 'auto' }
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', maxWidth: 600 }}>
                <Button style={style} className='lime-button primary lime-raised'>Primary</Button>
                <Button style={style} className='lime-button primary'>Primary</Button>
                <Button style={style} className='lime-button'>Default</Button>
                <Button style={style} className='lime-button text'>Text</Button>
            </div>
        )
    }
}`
export default md
