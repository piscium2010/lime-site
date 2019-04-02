import React from 'react'
import Basic from '../../examples/inlineMenu/Basic'
import basicMD from '../../../md/examples/inlineMenu/Basic.jsx.md'
import ExampleBlock from '../../components/ExampleBlock'
import inlineMenuMD from '../../../md/components/InlineMenu/InlineMenu.jsx.md'
import Markdown from '../../components/Markdown'

export default class InlineMenuPage extends React.Component {
    render() {
        return (
            <div>
                <ExampleBlock md={basicMD} title='Basic'>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>InlineMenu.jsx</h4>
                    <Markdown html={inlineMenuMD} />
                </section>
            </div>
        )
    }
}