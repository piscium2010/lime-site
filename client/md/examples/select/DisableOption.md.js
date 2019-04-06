const md = `import React from 'react';
import Select from '../../components/Select'
import '@piscium2010/lime/lime.css'

const options = []
for (let i = 0; i < 10; i++) {
    options.push({
        value: \`\${i}. Lorem ipsum dolor sit amet\`,
        text: \`\${i}. Lorem ipsum dolor sit amet\`,
        disabled: i === 3
    })
}

export default class DisableOption extends React.Component {

    renderItem = ({value, disabled}, select) => {
        return (
            disabled 
            ? <div className='lime-list-item-disabled'>{value}</div>
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
}`
export default md
