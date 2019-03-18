```javascript
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import 'lime/lime.css'

export default class Pure extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 600 }}>
                <div className='lime-card' style={{padding: 15}}>
                    <h3>Header</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium facilis consequatur, repellat blanditiis nobis quos aperiam, iure cumque rerum accusamus. Temporibus sapiente consectetur vero voluptatibus voluptates doloribus ea facilis.</p>
                    <div style={{fontSize: 12}}><i class="far fa-heart"></i><span>&nbsp;32</span></div>
                </div>
            </div>
        )
    }
}
```