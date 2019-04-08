const md = `import React from 'react';
import Select from '../../components/Select'
import '@piscium2010/lime/lime.css'

const options = [
    { value: 'aquamarine', text: 'aquamarine' },
    { value: 'bisque', text: 'bisque' },
    { value: 'coral', text: 'coral', disabled: true },
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
