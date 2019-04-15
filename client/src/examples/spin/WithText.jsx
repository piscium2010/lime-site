import React from 'react';
import Spin from '../../components/Spin'
import '@piscium2010/lime/lime.css'

export default class WithText extends React.Component {
    render() {
        return (
            <div>
                <Spin text='Loading' show />
            </div>
        )
    }
}