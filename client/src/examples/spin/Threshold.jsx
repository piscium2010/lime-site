import React from 'react';
import Spin from '../../components/Spin'
import '@piscium2010/lime/lime.css'

export default class Threshold extends React.Component {
    state = { loading: false}

    onClick = evt => {
        this.setState(prevState => ({
            loading: !prevState.loading
        }))
    }

    render() {
        const { loading } = this.state
        return (
            <div>
                <div>
                    <p>Only trigger loading when waiting time reach threshold - 2s here</p>
                    <button className='lime-button primary' onClick={this.onClick}>{loading ? 'Stop': 'Start'}</button>
                </div>
                <Spin show={loading} threshold={2000}/>
            </div>
        )
    }
}