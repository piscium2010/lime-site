import React from 'react'
import Basic from '../examples/dialog/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/dialog/Basic.md.js'
import Markdown from '../components/Markdown'

export default class AccordiontPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Dialog</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                </section>
            </div>
        )
    }
}