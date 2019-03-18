import React from 'react';
import Button from '../components/Button'

export default class GetStartedPage extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className="lime-card card">
                    <div className='lime-logo'>
                        <span className='lime-logo-text'>{'{Lime}'}</span>
                    </div>
                    <p className='desc'>
                        An extremly light weight react UI kit used for building your own UI component
                    </p>
                    <div className='lime-flex-center start'>
                        <Button className='lime-button primary'>Get Started</Button>
                    </div>
                </div>
            </div>
        )
    }
}