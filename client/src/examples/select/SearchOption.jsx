import React from 'react';
import Select from '../../components/Select'
import '@piscium2010/lime/lime.css'

const data = [
    { value: 'aquamarine', text: 'aquamarine' },
    { value: 'bisque', text: 'bisque' },
    { value: 'coral', text: 'coral' },
    { value: 'darkcyan', text: 'darkcyan' },
    { value: 'firebrick', text: 'firebrick' },
    { value: 'greenyellow', text: 'greenyellow' },
    { value: 'honeydew', text: 'honeydew' },
    { value: 'indianred', text: 'indianred' },
    { value: 'khaki', text: 'khaki' },
    { value: 'lightsalmon', text: 'lightsalmon' },
    { value: 'mistyrose', text: 'mistyrose' },
    { value: 'olive', text: 'olive' },
    { value: 'palegreen', text: 'palegreen' },
    { value: 'royalblue', text: 'royalblue' },
    { value: 'silver', text: 'silver' },
    { value: 'thistle', text: 'thistle' },
    { value: 'violet', text: 'violet' },
    { value: 'wheat', text: 'wheat' },
    { value: 'yellow', text: 'yellow' }
]

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
    }

    render() {
        const { loading, options, value} = this.state
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