import React from 'react'
import Basic from '../examples/list/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/list/Basic.md.js'
import Thousands from '../examples/list/Thousands'
import thousandsMD from '../../md/examples/list/Thousands.md.js'
import Markdown from '../components/Markdown'

export default class ListPage extends React.Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <ExampleBlock md={exampleMD} title={'Basic'}>
                    <Basic />
                </ExampleBlock>
                <ExampleBlock md={thousandsMD} title={'Huge Data'}>
                    <Thousands />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                </section>
            </div>
        )
    }
}