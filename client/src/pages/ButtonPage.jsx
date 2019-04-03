import React from 'react';
import Basic from '../examples/button/Basic'
import basicMD from '../../md/examples/button/Basic.md.js'
import IconButton from '../examples/button/IconButton'
import iconButtonMD from '../../md/examples/button/IconButton.md.js'
import Pure from '../examples/button/Pure'
import pureMD from '../../md/examples/button/Pure.md.js'
import ExampleBlock from '../components/ExampleBlock'
import buttonMD from '../../md/components/Button/Button.md.js'
import Markdown from '../components/Markdown'

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Button</h2>
                <ExampleBlock md={pureMD} title={'Basic'}>
                    <Pure />
                </ExampleBlock>
                <ExampleBlock md={iconButtonMD} title={'Icon'}>
                    <IconButton />
                </ExampleBlock>
                <ExampleBlock md={basicMD} title={'Ripple'}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Button.jsx</h4>
                    <Markdown md={buttonMD} />
                </section>
            </div>
        )
    }
}
