import React from 'react'
import PageHeader from '../components/PageHeader'
import Disabled from '../examples/button/Disabled'
import disabledMD from '../../md/examples/button/Disabled.md.js'
import IconButton from '../examples/button/IconButton'
import iconButtonMD from '../../md/examples/button/IconButton.md.js'
import Basic from '../examples/button/Basic'
import basicMD from '../../md/examples/button/Basic.md.js'
import ExampleBlock from '../components/ExampleBlock'
import buttonMD from '../../md/components/Button/Button.md.js'
import Markdown from '../components/Markdown'

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Button' desc='Button is a button that u will click.' />
                <section>
                    <h2>Usage</h2>
                    <ExampleBlock md={basicMD} title={'Basic'}>
                        <Basic />
                    </ExampleBlock>
                    <ExampleBlock md={iconButtonMD} title={'Icon'}>
                        <IconButton />
                    </ExampleBlock>
                    <ExampleBlock md={disabledMD} title={'Disabled'}>
                        <Disabled />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section>
                    <div className="implement">
                        <h4>Button.jsx</h4>
                        <Markdown md={buttonMD} />
                    </div>
                </section>
            </div>
        )
    }
}
