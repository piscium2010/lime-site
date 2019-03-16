import React from 'react';
import Pure from '../examples/card/Pure'
import pureMD from '../../md/examples/card/Pure.jsx.md'
import ExampleBlock from '../components/ExampleBlock'

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Card</h2>
                <ExampleBlock md={pureMD} title={'Pure CSS'}>
                    <Pure />
                </ExampleBlock>
            </div>
        )
    }
}