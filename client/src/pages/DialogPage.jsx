import React from 'react'
import Basic from '../examples/dialog/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/dialog/Basic.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class AccordiontPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Dialog' desc={`Used when require user confirmation/input, primarily for lightweight task. It has two behaviors that one block user interaction with page and the other doesn't.`} />
                <section>
                    <h2>Usage</h2>
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