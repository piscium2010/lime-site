```javascript
import React from 'react';
import Spin from '../../components/Spin'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div>
                <Spin />
                <Spin text='Loading'/>
            </div>
        )
    }
}
```