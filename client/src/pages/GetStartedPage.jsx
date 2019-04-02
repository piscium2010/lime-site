import React from 'react';
import Button from '../components/Button'
import { Link } from "react-router-dom"

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
                    <Link to='/lime' className='lime-flex-center start'>
                        <Button className='lime-button primary'>Get Started</Button>
                    </Link>
                </div>
            </div>
        )
    }
}