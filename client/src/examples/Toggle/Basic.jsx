import React from 'react';
import Toggle from '../../components/Toggle'
import '@piscium2010/lime/lime.css'

const itemStyle = { display: 'flex', justifyContent: 'space-between', padding: 12 }

export default class Basic extends React.Component {
    onChange = ({ name, checked }) => {
        console.log(name, checked)
    }
    render() {
        return (
            <div className='lime-raised' style={{ maxWidth: 400, borderRadius: 5 }}>
                <div style={itemStyle}><span>Airplane</span><Toggle onChange={this.onChange} name='airplane' /></div>
                <div style={itemStyle}><span>GPS Services</span><Toggle onChange={this.onChange} name='gps' defaultChecked={true} /></div>
                <div style={itemStyle}><span>Bluetooth</span><Toggle onChange={this.onChange} name='bluetooth' /></div>
            </div>
        )
    }
}