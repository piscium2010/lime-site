import React from 'react'
import Basic from '../examples/textField/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/textField/Basic.md.js'
import textFieldMD from '../../md/components/TextField/TextField.md.js'
import Markdown from '../components/Markdown'
import PageHeader from '../components/PageHeader'

export default class TextFieldPage extends React.Component {
    render() {
        const desc = <span>Typically used to capture a single line of text.</span>
        return (
            <div>
                <PageHeader title='Text Field' desc={desc} />
                <h2>Usage</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>TextField.jsx</h4>
                    <Markdown md={textFieldMD} />
                </section>
            </div>
        )
    }
}