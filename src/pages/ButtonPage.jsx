import React from 'react';
import Basic from '../examples/button/Basic'
import basicMD from '../../md/examples/button/Basic.jsx.md'
import Pure from '../examples/button/Pure'
import pureMD from '../../md/examples/button/Pure.jsx.md'
import ExampleBlock from '../components/ExampleBlock'
import buttonMD from '../../md/components/button/Button.jsx.md'
import Markdown from '../components/Markdown'

export default class CardPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Button</h2>
                <ExampleBlock md={pureMD} title={'Pure CSS'}>
                    <Pure />
                </ExampleBlock>
                <ExampleBlock md={basicMD} title={'Component'}>
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