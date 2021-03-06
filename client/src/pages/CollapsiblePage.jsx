import React from 'react'
import Basic from '../examples/collapsible/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/collapsible/Basic.md.js'
import PageHeader from '../components/PageHeader'
import PropsTable from '../components/PropsTable'
import Markdown from '../components/Markdown'

export default class AccordiontPage extends React.Component {
    render() {
        const desc = <span>Lime built-in component. It can be used to build other UI components like <i>InlineMenue</i>, <i>Accordion</i> or simply showing/hiding content with collapsing animation.</span>
        return (
            <div>
                <PageHeader title='Collpasible' desc={desc} />
                <section>
                    <h2>Usage</h2>
                    <ExampleBlock md={exampleMD}>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>API</h2>
                <section>
                    <PropsTable data={[
                        { name: 'defaultExpand', desc: 'initial expand status', type: 'bool', deft: 'false' },
                        { name: 'expand', desc: 'expand status', type: 'bool' }
                    ]}
                    />
                </section>
            </div>
        )
    }
}