import React from 'react'
import Basic from '../../examples/inlineMenu/Basic'
import basicMD from '../../../md/examples/inlineMenu/Basic.md.js'
import ExampleBlock from '../../components/ExampleBlock'
import inlineMenuMD from '../../../md/components/InlineMenu/InlineMenu.md.js'
import Markdown from '../../components/Markdown'
import PageHeader from '../components/PageHeader'

export default class InlineMenuPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Dialog' desc={`Used when require user confirmation/input, primarily for lightweight task. It has two behaviors that one block user interaction with page and the other doesn't.`} />
                <ExampleBlock md={basicMD} title='Basic'>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>InlineMenu.jsx</h4>
                    <Markdown md={inlineMenuMD} />
                </section>
            </div>
        )
    }
}