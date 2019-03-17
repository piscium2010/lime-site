import React from 'react'
import Basic from '../examples/layer/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/layer/Basic.jsx.md'
import Markdown from '../components/Markdown'

export default class LayerPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Layer</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                </section>
            </div>
        )
    }
}