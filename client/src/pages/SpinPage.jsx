import React from 'react'
import Basic from '../examples/spin/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/spin/Basic.md.js'
import spinMD from '../../md/components/Spin/Spin.md.js'
import Markdown from '../components/Markdown'
import PageHeader from '../components/PageHeader'
import Threshold from '../examples/spin/Threshold'
import thresholdMD from '../../md/examples/spin/Threshold.md.js'
import WithText from '../examples/spin/WithText'
import withTextMD from '../../md/examples/spin/WithText.md.js'

export default class SpinPage extends React.Component {
    render() {
        const desc = <span>Human get bored when waiting girl friend or data loading, so give them something to see while waiting. </span>
        return (
            <div>
                <PageHeader title='Spin' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD} title='Basic'>
                        <Basic />
                    </ExampleBlock>
                    <ExampleBlock md={withTextMD} title='With Text'>
                        <WithText />
                    </ExampleBlock>
                    <ExampleBlock md={thresholdMD} title='Threshold'>
                        <Threshold />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Spin.jsx</h4>
                    <Markdown md={spinMD} />
                </section>
            </div>
        )
    }
}