import React from 'react'
import Basic from '../examples/accordion/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/accordion/Basic.jsx.md'
import panelMD from '../../md/components/accordion/Panel.jsx.md'
import accordionMD from '../../md/components/accordion/accordion.jsx.md'
import Markdown from '../components/Markdown'

export default class AccordiontPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Accordion</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Panel.jsx</h4>
                    <Markdown html={panelMD} />
                    <h4>Accordion.jsx</h4>
                    <Markdown html={accordionMD} />
                </section>
            </div>
        )
    }
}