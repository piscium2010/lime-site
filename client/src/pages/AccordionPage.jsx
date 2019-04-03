import React from 'react'
import Basic from '../examples/accordion/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/accordion/Basic.md.js'
import panelMD from '../../md/components/Accordion/Panel.md.js'
import accordionMD from '../../md/components/Accordion/Accordion.md.js'
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
                <p>We can break this into two parts. One is the container - <i>Accordion</i> and another the <i>Panel</i>. Magic is within the panel, which needs to be collapsible. Build the Panel with lime Collapsible component, then you will have your Accordion ready and served.</p>
                <section className='implement'>
                    <h4>Panel.jsx</h4>
                    <Markdown md={panelMD} />
                    <h4>Accordion.jsx</h4>
                    <Markdown md={accordionMD} />
                </section>
            </div>
        )
    }
}