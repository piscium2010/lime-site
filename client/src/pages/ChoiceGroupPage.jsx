import React from 'react'
import Basic from '../examples/choiceGroup/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/choiceGroup/Basic.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class ChoicGroupPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Choice Group' desc={'Choice group is like - \"Come on! Don\'t be gready. U can\'t have them all. Just pick up the one most fit u\"'} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD}>
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