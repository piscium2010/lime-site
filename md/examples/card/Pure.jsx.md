```javascript
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@piscium2010/lime/lime.css'

export default class Pure extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: 600 }}>
                <div className='lime-card' style={{ padding: 15 }}>
                    <h3 style={{ margin: '0 0 15px 0' }}>Header</h3>
                    <hr style={{ margin: '0 -15px', color: '#f2f2f2' }} />
                    <p style={{ lineHeight: '1.2em' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium facilis consequatur, repellat blanditiis nobis quos aperiam, iure cumque rerum accusamus. Temporibus sapiente consectetur vero voluptatibus voluptates doloribus ea facilis.</p>
                    <div style={{ fontSize: 12 }}><i class="far fa-heart"></i><span>&nbsp;32</span></div>
                </div>
            </div>
        )
    }
}
```