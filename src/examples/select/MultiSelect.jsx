import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 10; i++) {
    options.push({
        key: i,
        value: `${i}. Lorem ipsum dolor sit amet`
    })
}

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
            >{it.value}</label>
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