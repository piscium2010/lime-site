import React from 'react'
import Basic from '../examples/list/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/list/Basic.md.js'
import PageHeader from '../components/PageHeader'
import PropsTable from '../components/PropsTable'
import Markdown from '../components/Markdown'

export default class ListPage extends React.Component {
    render() {
        const desc = <span>Lime built-in component. It is capable of accomodating huge amout of data by only rendering 20 (specified by pageSize prop) active rows each time.</span>
        return (
            <div>
                <PageHeader title='List' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD} title={''}>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>API</h2>
                <section>
                    <PropsTable data={[
                        { name: 'pageSize', desc: 'items per page', type: 'number', deft: '20' },
                        { name: 'itemHeight', desc: 'height of item', type: 'number', deft: '30' },
                        { name: 'items', desc: 'item object', type: '{key} & Object' },
                        { name: 'renderItem', desc: 'item renderer', type: 'func(item) => element' }
                    ]}
                    />
                </section>
            </div>
        )
    }
}