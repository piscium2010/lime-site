import React from 'react';
import Toggle from '@piscium2010/lime/Toggle'
import '@piscium2010/lime/lime.css'

const itemStyle = { display: 'flex', justifyContent: 'space-between', padding: 12 }
const ruleStyle = { color: '#f2f2f2', margin: 0 }

export default class Basic extends React.Component {
    onChange = ({ name, checked }) => {
        console.log(name, checked)
    }
    render() {
        return (
            <div className='lime-card' style={{ maxWidth: 500, borderRadius: 5 }}>
                <div style={itemStyle}><span>Airplane</span><Toggle onChange={this.onChange} name='airplane' /></div>
                <hr style={ruleStyle} />
                <div style={itemStyle}><span>GPS Services</span><Toggle onChange={this.onChange} name='gps' defaultChecked={true} /></div>
                <hr style={ruleStyle} />
                <div style={itemStyle}><span>Bluetooth</span><Toggle onChange={this.onChange} name='bluetooth' /></div>
            </div>
        )
    }
}