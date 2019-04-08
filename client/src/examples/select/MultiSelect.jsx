import React from 'react';
import Select from '../../components/Select'
import '@piscium2010/lime/lime.css'

const options = [
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

export default class MultiSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: []
        }
    }
    renderItem = (it, select) => {
        let selected = Array.from(this.state.selected)
        console.log(`selected.includes(it.value)`,selected)
        return (<div style={{ height: 'inherit' }}>
            <input
                name={it.key}
                type='checkbox'
                style={{ height: 13, marginLeft: 10, marginRight: 'auto' }}
                value={it.value}
                checked={selected.includes(it.value)}
            />
            <label style={{
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                paddingLeft: 30
            }}
                onClick={() => {
                    let i = selected.indexOf(it.value)
                    if (i >= 0) {
                        selected.splice(i, 1)
                    } else {
                        selected.push(it.value)
                    }
                    this.setState({ selected })
                    select()
                }}
            >{it.text}</label>
        </div>)
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <Select
                    multi
                    name='disable-option'
                    options={options}
                    renderItem={this.renderItem}
                    style={{ maxWidth: 400 }}
                />
            </div>
        )
    }
}