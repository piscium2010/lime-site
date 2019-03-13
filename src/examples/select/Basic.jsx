import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class Basic extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { value: ''}
    }

    handleChange = evt => {
        console.log(`change`,)
        this.setState({
            value: evt.target.value
        })
    }

    render() {
        return (
            <div style={{ maxWidth: 400 }}>
                <Select name='user' options={options} onChange={this.handleChange}/>
                <div>{this.state.value}</div>
            </div>
        )
    }
}