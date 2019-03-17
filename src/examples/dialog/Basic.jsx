import React from 'react';
import Dialog from 'lime/Dialog'
import 'lime/lime.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    onClick = evt => {
        this.setState(prevState => {
            return { show: !prevState.show };
        });
    }

    render() {
        return (
            <div>
                <Dialog show={this.state.show}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab.
                    </p>
                    <button className='lime-button' onClick={this.onClick}>Click Me</button>
                </Dialog>
                <button className='lime-button' onClick={this.onClick}>Click Me</button>
            </div>
        )
    }
}