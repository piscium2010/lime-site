```javascript
import React from 'react';
import Ripple from 'lime/Ripple'

export default class Basic extends React.Component {
    render() {
        return (
            <div>
                <button className='sd-button primary'>Lime<Ripple></Ripple></button>
                <button className='sd-button text'>Lime</button>
            </div>
        )
    }
}
```