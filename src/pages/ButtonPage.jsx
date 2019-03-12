import React from 'react';
import Basic from '../examples/Button/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Button/Basic.jsx.md'
import Markdown from '../components/Markdown'

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Story</h3>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
            </div>
        )
    }
}