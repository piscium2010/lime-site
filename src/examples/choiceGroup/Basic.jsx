import React from 'react';
import ChoiceGroup from 'lime/ChoiceGroup'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        const options = [
            { value: 'Male', text: 'Male' },
            { value: 'Female', text: 'Male' }
        ]
        const optionsII = [
            { value: 'Single', text: 'Male' },
            { value: 'Married but available', text: 'Male' }
        ]
        return (
            <div>
                <p>
                    <ChoiceGroup name='a'>
                        <ChoiceGroup.Option value='1'>
                            Male
                        </ChoiceGroup.Option>
                        <ChoiceGroup.Option value='2'>
                            Female
                        </ChoiceGroup.Option>
                    </ChoiceGroup>
                </p>
                <p>
                    <ChoiceGroup style={{ display: 'flex', flexDirection: 'column' }} >
                        <ChoiceGroup.Option value='1'>
                            Male
                        </ChoiceGroup.Option>
                        <ChoiceGroup.Option value='2'>
                            Female
                        </ChoiceGroup.Option>
                    </ChoiceGroup>
                </p>
            </div>
        )
    }
}