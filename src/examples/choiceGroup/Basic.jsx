import React from 'react';
import ChoiceGroup from 'lime/ChoiceGroup'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        const options = [
            { key: '1', value: 'Male', text: 'Male' },
            { key: '2', value: 'Female', text: 'Male' }
        ]
        const optionsII = [
            { key: '1', value: 'Single', text: 'Male' },
            { key: '2', value: 'Married but available', text: 'Male' }
        ]
        return (
            <div>
                <p>
                    <ChoiceGroup options={options} />
                </p>
                <p>
                    <ChoiceGroup options={optionsII} style={{ display: 'flex', flexDirection: 'column' }} />
                </p>
            </div>
        )
    }
}