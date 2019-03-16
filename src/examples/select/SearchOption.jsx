import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const data = []
for (let i = 0; i < 20; i++) {
    data.push({
        value: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class SearchOption extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            loading: false,
            options: []
        }
    }

    onChangeInput = evt => {
        let input = evt.target.value
        this.setState({loading: true})
        setTimeout(() => {
            this.setState({
                options: data.filter(d => d.value.indexOf(input) >= 0),
                loading: false
            })
        }, 3000);
    }

    handleChange = item => {
        // this.setState({
        //     value: item.value
        // })
    }

    render() {
        let { loading, options, value} = this.state
        console.log(`loading`,loading)
        return (
            <div style={{ display: 'flex' }}>
                <Select
                    loading={loading}
                    filter={this.filter}
                    options={options}
                    onChange={this.handleChange}
                    onChangeInput={this.onChangeInput}
                    style={{ maxWidth: 400 }}
                />
                <span style={{lineHeight:'30px', padding: '0 15px'}}>{value}</span>
            </div>
        )
    }
}