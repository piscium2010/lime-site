import React from 'react';
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

@withRouter
export default class GetStartedPage extends React.Component {
    
    onClick = evt => {
        setTimeout(() => {
            this.props.history.push('/lime')
        }, 300);
    }

    render() {
        return (
            <div className='home'>
                <div className="lime-raised card">
                    <div className='lime-logo'>
                        <span className='lime-logo-text'>{'{Lime}'}</span>
                    </div>
                    <p className='desc'>
                        An extremly light weight react UI kit used for building your own UI component
                    </p>
                    <div className='lime-flex-center start'>
                        <Button className='lime-button primary' onClick={this.onClick}>Get Started</Button>
                    </div>
                </div>
            </div>
        )
    }
}