```javascript
import React from 'react';
import Collapsible from '@piscium2010/lime/Collapsible'
import '@piscium2010/lime/lime.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: true
        }
    }

    onClick = evt => {
        this.setState(prevState => {
            return { expand: !prevState.expand };
        });
    }

    render() {
        return (
            <div>
                <button className='lime-button' onClick={this.onClick}>Click Me</button>
                <Collapsible expand={this.state.expand}>
                    <div style={{ height: 30, background: '#a0d911', padding: 10 }}>
                        <div style={{ lineHeight: '30px', fontSize: '30px', color: 'white' }}>
                            Logo
                        </div>
                    </div>
                </Collapsible>
            </div>
        )
    }
}
```