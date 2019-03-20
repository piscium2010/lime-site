import React from 'react';
import Select from '../../components/Select'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 10; i++) {
    options.push({
        value: i % 3 === 0 ? undefined : `${i}. Lorem ipsum dolor sit amet`,
        text: i % 3 === 0 ? undefined : `${i}. Lorem ipsum dolor sit amet`,
        header: 'Group',
        groupHeader: i % 3 === 0
    })
}

export default class OptionGroup extends React.Component {

    renderItem = ({value, header, groupHeader}, select) => {
        return (
            groupHeader
            ? <div className='lime-list-item-disabled' style={{cursor:'default'}}>{header}</div>    
            : <div className='lime-list-item' onClick={select}>{value}</div>
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