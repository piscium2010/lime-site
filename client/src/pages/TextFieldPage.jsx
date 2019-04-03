import React from 'react'
import Basic from '../examples/textField/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/textField/Basic.md.js'
import textFieldMD from '../../md/components/TextField/TextField.md.js'
import Markdown from '../components/Markdown'

export default class TextFieldPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Text Field</h2>
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