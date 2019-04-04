import React from 'react'
import accordionMD from '../../md/components/Accordion/Accordion.md.js'
import Basic from '../examples/accordion/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/accordion/Basic.md.js'
import panelMD from '../../md/components/Accordion/Panel.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class AccordiontPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Accordion' desc={`See one at a time. U can't date three girls at the same time, do u?`} />
                <section>
                    <h2>Usage</h2>
                    <ExampleBlock md={exampleMD} >
                        <Basic />
                    </ExampleBlock>
                </section>
                <section>
                    <h2>Build it yourself</h2>
                    <p>We can break this into two parts. One is the container - <i>Accordion</i> and another the <i>Panel</i>. Magic is within the panel, which needs to be collapsible. Build the Panel with lime Collapsible component, then you will have your Accordion ready and served.</p>
                    <div className='implement'>
                        <h4>Panel.jsx</h4>
                        <Markdown md={panelMD} />
                        <h4>Accordion.jsx</h4>
                        <Markdown md={accordionMD} />
                    </div>
                </section>
            </div>
        )
    }
}