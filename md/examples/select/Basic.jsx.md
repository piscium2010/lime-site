```javascript
import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: 400 }}>
                <Select options={options} />
            </div>
        )
    }
}
```