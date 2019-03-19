```javascript
import React from 'react';
import ChoiceGroup from 'lime/ChoiceGroup'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        const options = [
            { key: '1', value: 'Male' },
            { key: '2', value: 'Female' }
        ]
        const optionsII = [
            { key: '1', value: 'Single' },
            { key: '2', value: 'Married but available' }
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
```