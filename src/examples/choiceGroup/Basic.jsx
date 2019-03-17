import React from 'react';
import ChoiceGroup from 'lime/ChoiceGroup'
import 'lime/lime.css'

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <ChoiceGroup options={[
                    {key:'1', value:'Male'},
                    {key:'2', value:'Female'}
                ]}/>
            </div>
        )
    }
}