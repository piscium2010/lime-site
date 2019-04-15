import React from 'react';
import Spin from '../../components/Spin'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div>
                <Spin size={20} show/>
            </div>
        )
    }
}