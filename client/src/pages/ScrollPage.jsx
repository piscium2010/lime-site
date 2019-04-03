import React from 'react'
import Basic from '../examples/scroll/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/scroll/Basic.md.js'
import Markdown from '../components/Markdown'

export default class ScrollPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Scroll</h2>
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