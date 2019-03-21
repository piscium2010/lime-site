import React from 'react'
import Basic from '../examples/textField/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/textField/Basic.jsx.md'
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
                </section>
            </div>
        )
    }
}