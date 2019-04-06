import React from 'react'
import Basic from '../examples/ripple/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/ripple/Basic.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class RipplePage extends React.Component {
    render() {
        const desc = <span>Lime built-in component. This is from google material design. Ripple waving away from the clicking point, so beautiful that your heart flipped.</span>
        return (
            <div>
                <PageHeader title='Ripple' desc={desc} />
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