```javascript
import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        value: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class Loading extends React.Component {
    render() {
        return (
            <div style={{ display:'flex' }}>
                <Select 
                    name='loading'
                    loading
                    options={options}
                    style={{maxWidth: 400}}
                />
            </div>
        )
    }
}
```