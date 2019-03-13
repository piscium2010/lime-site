import React from 'react';
import Basic from '../examples/Button/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Button/Basic.jsx.md'
import buttonMD from '../../md/components/Button/Button.jsx.md'
import Markdown from '../components/Markdown'

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Story</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Button.jsx</h4>
                    <Markdown html={buttonMD} />
                </section>
            </div>
        )
    }
}