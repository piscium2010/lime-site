import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        value: `${i}. Lorem ipsum dolor sit amet`
    })
}

export default class DisableOption extends React.Component {

    renderItem

    render() {
        return (
            <div style={{ display:'flex' }}>
                <Select 
                    name='disable-option'
                    options={options}
                    style={{maxWidth: 400}}
                />
            </div>
        )
    }
}