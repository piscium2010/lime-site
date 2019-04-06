import React from 'react'
import Basic from '../examples/list/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/list/Basic.md.js'
import Thousands from '../examples/list/Thousands'
import thousandsMD from '../../md/examples/list/Thousands.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class ListPage extends React.Component {
    render() {
        const desc = <span>Lime built-in component. It is capable of accomodating huge amout of data by only rendering 20 (specified by pageSize prop) active rows each time.</span>
        return (
            <div>
                <PageHeader title='List' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD} title={'Lyrics of Black Sea'}>
                        <Basic />
                    </ExampleBlock>
                </section>


                <h2>Build it yourself</h2>
                <section className='implement'>
                </section>
            </div>
        )
    }
}