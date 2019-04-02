```javascript
import React from 'react';
import Checkbox from '@piscium2010/lime/Checkbox'
import '@piscium2010/lime/lime.css'

const size = {
    small: { width: 16, height: 16 },
    medium: { width: 18, height: 18 },
    large: { width: 21, height: 21 }
}

export default class Basic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChange = ({ name, checked }) => {
        this.setState({ [name]: checked ? '会' : '不会' })
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 600 }}>
                    <Checkbox name={'react'} label='React' onChange={this.handleChange} defaultChecked />
                    <Checkbox boxStyle={{...size.medium}} name={'vue'} label='Vue' onChange={this.handleChange} />
                    <Checkbox boxStyle={{...size.large}} name={'angular'} label='Angular' onChange={this.handleChange} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 600 }}>
                    <p>React: {this.state.react || ''}</p>
                    <p>Vue: {this.state.vue || ''}</p>
                    <p>Angular: {this.state.angular || ''}</p>
                </div>
            </div>

        )
    }
}
```