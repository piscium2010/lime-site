```javascript
import React from 'react';
import Spin from '../../components/Spin'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <Spin size={20}/>
                </p>
                <p>
                    <Spin text='Loading' />
                </p>
            </div>
        )
    }
}
```