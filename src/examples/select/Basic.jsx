import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        value: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class Basic extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { value: ''}
    }

    handleChange = item => {
        this.setState({
            value: item.value
        })
    }

    render() {
        return (
            <div style={{ display:'flex' }}>
                <Select 
                    name='user' 
                    options={options} 
                    onChange={this.handleChange}
                    style={{maxWidth: 400}}
                />
                <span style={{lineHeight:'30px', padding: '0 15px'}}>{this.state.value}</span>
            </div>
        )
    }
}