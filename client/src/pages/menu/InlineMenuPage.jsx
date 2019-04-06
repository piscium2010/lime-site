import React from 'react'
import Basic from '../../examples/inlineMenu/Basic'
import basicMD from '../../../md/examples/inlineMenu/Basic.md.js'
import ExampleBlock from '../../components/ExampleBlock'
import inlineMenuMD from '../../../md/components/InlineMenu/InlineMenu.md.js'
import Markdown from '../../components/Markdown'
import PageHeader from '../../components/PageHeader'

export default class InlineMenuPage extends React.Component {
    render() {
        const desc = <span>Serve as side navigation or list of commands</span>
        return (
            <div>
                <PageHeader title='Inline Menu' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={basicMD} title='Basic'>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>InlineMenu.jsx</h4>
                    <Markdown md={inlineMenuMD} />
                </section>
            </div>
        )
    }
}