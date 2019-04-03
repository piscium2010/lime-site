import React from 'react'
import Basic from '../examples/checkbox/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/checkbox/Basic.md.js'
import Markdown from '../components/Markdown'

export default class CheckBoxPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Checkbox</h2>
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