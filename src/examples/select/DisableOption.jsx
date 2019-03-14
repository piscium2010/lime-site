import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 10; i++) {
    options.push({
        value: `${i}. Lorem ipsum dolor sit amet`,
        disabled: i === 3
    })
}

export default class DisableOption extends React.Component {

    renderItem = ({value, disabled}) => {
        console.log(`disabled`,value)
        return (
            disabled ? <div style={{pointerEvents:'none', cursor:'not allowed'}}>{'test'}</div> : <div>{value}</div>
        )
    }

    render() {
        return (
            <div style={{ display:'flex' }}>
                <Select 
                    name='disable-option'
                    options={options}
                    renderItem={this.renderItem}
                    style={{maxWidth: 400}}
                />
            </div>
        )
    }
}