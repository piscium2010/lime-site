import React from 'react';
import Collapsible from 'lime/Collapsible'
import 'lime/lime.css'
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
                    <div style={{ height: 50, background: '#a0d911', padding: '0 10px' }}>
                        <span style={{
                            lineHeight: '50px',
                            fontSize: '30px',
                            fontWeight: 'bolder',
                            color: 'white'
                        }}
                        >{'{Lime}'}</span>
                    </div>
                </Collapsible>
            </div>
        )
    }
}