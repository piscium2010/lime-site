import React from 'react'
import Basic from '../examples/Spin/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/spin/Basic.jsx.md'
import spinMD from '../../md/components/Spin/Spin.jsx.md'
import Markdown from '../components/Markdown'

export default class SpinPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Spin</h2>
                <ExampleBlock md={exampleMD} title={'Basic'}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Spin.jsx</h4>
                    <Markdown html={spinMD} />
                </section>
            </div>
        )
    }
}