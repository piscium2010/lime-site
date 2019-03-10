import React from 'react'
import Basic from '../../examples/Accordion/Basic'
import ExampleBlock from '../../components/ExampleBlock'
import md from '../../../md/examples/Accordion/Basic.jsx.md'

export default class AccordiontPage extends React.Component {
    render() {
        return (
            <div>
                <ExampleBlock md={md}>
                    <Basic />
                </ExampleBlock>
            </div>
        )
    }
}