import React from 'react'
import Basic from '../examples/scroll/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/scroll/Basic.md.js'
import PageHeader from '../components/PageHeader'
import PropsTable from '../components/PropsTable'
import Markdown from '../components/Markdown'

export default class ScrollPage extends React.Component {
    render() {
        const desc = <span>Lime built-in component. With custom scroll bar consistent across browsers.</span>
        return (
            <div>
                <PageHeader title='Scoll' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD}>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>API</h2>
                <section>
                    <PropsTable data={[
                        { name: 'trackVertical', desc: 'if true, vertical thumb will display', type: 'bool', deft: 'true' },
                        { name: 'height', desc: 'height of scroll', type: 'number', deft: '' },
                        { name: 'onScroll', desc: 'triggered when scrolling', type: 'func' }
                    ]}
                    />
                </section>
            </div>
        )
    }
}