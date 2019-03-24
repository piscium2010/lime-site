import React from 'react';
import Spin from '../../components/Spin'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <Spin size={20}/>
                </p>
                <p>
                    <Spin text='Loading' />
                </p>
            </div>
        )
    }
}