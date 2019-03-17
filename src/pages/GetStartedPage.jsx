import React from 'react';
import Button from '../components/Button'

export default class GetStartedPage extends React.Component {
    render() {
        return (
            <div className='home'>

                <div className='lime-logo'>
                    <span className='lime-logo-text'>{'{Lime}'}</span>
                </div>
                <div className='desc'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus iste quia odit repellendus a accusantium doloremque ipsa dolorum amet.
                    </p>
                </div>
                <div>
                    <Button className='lime-button primary'>Get Started</Button>
                </div>
            </div>
        )
    }
}