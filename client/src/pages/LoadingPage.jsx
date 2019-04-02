import React from 'react'
import Loading from '../components/Loading'

export default class LoadingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Loading />
                </div>
                <br />
                <br />
                <div>
                    <Loading text='loading' />
                </div>
            </div>
        )
    }
}