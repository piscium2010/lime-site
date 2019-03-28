```javascript
import React from 'react';
import ChoiceGroup from '@piscium2010/lime/ChoiceGroup'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    onChange = ({value}) => {
        console.log(`value`,value)
    }

    render() {
        return (
            <div>
                <h5>H</h5>
                <p>
                    <ChoiceGroup name='gender' defaultValue='2' onChange={this.onChange}>
                        <ChoiceGroup.Option value='1'>
                            Male
                        </ChoiceGroup.Option>
                        <ChoiceGroup.Option value='2'>
                            Female
                        </ChoiceGroup.Option>
                    </ChoiceGroup>
                </p>
                <h5>V</h5>
                <p>
                    <ChoiceGroup name='marriage' style={{ display: 'inline-flex', flexDirection: 'column' }} >
                        <ChoiceGroup.Option value='3'> 
                            Single
                        </ChoiceGroup.Option>
                        <ChoiceGroup.Option value='4'>
                            Married <span style={{color:'#cdcdcd'}}>but available</span>
                        </ChoiceGroup.Option>
                    </ChoiceGroup>
                </p>
            </div>
        )
    }
}
```