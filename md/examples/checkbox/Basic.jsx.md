```javascript
import React from 'react';
import CheckBox from 'lime/Checkbox'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <CheckBox />
            </div>
        )
    }
}
```