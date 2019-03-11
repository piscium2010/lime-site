import React from 'react'
import Basic from '../examples/Accordion/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Accordion/Basic.jsx.md'
import panelMD from '../../md/components/Accordion/Panel.jsx.md'
import accordionMD from '../../md/components/Accordion/accordion.jsx.md'
import Markdown from '../components/Markdown'

export default class AccordiontPage extends React.Component {
    render() {
        return (
            <div>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <section className='implement'>
                    <h3>Implement</h3>
                    <h4>Panel.jsx</h4>
                    <Markdown html={panelMD} />
                    <h4>Accordion.jsx</h4>
                    <Markdown html={accordionMD} />
                </section>
            </div>
        )
    }
}