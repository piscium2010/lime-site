```javascript
import React from 'react';
import 'lime/lime.css'

export default class Pure extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <button className='lime-button primary lime-raised lime-active-outline'>Raised</button>
                <button className='lime-button primary'>Primary</button>
                <button className='lime-button'>Default</button>
                <button className='lime-button text'>Text</button>
                <button className='lime-button primary' disabled>Disabled</button>
                <button className='lime-button text' disabled>Disabled</button>
            </div>
        )
    }
}
```