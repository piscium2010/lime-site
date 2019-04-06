import React from 'react'
import Basic from '../examples/layer/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/layer/Basic.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class LayerPage extends React.Component {
    render() {
        const desc = <span>Lime built-in overlay component. It can be used to build other UI components like <i>FloatMenu</i>, <i>Tooltip</i> or <i>Dropdown</i> of <i>Select</i></span>
        return (
            <div>
                <PageHeader title='Layer' desc={desc} />
                    <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                </section>
                
                <h2>Build it yourself</h2>
                <section className='implement'>
                </section>
            </div>
        )
    }
}