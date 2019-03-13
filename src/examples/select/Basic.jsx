import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        value: i,
        text: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class Basic extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { value: ''}
    }

    handleChange = item => {
        this.setState({
            value: item.text
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
                <div>{this.state.value}&nbsp;A</div>
            </div>
        )
    }
}