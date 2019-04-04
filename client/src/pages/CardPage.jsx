import React from 'react';
import Pure from '../examples/card/Pure'
import pureMD from '../../md/examples/card/Pure.md.js'
import Ripple from '../examples/card/Ripple'
import RippleMD from '../../md/examples/card/Ripple.md.js'
import ExampleBlock from '../components/ExampleBlock'
import PageHeader from '../components/PageHeader'

export default class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Card' desc={`A very attractive form of presenting, providing you with clean and well organized content.`} />
                <section>
                    <h2>Usage</h2>
                    <ExampleBlock md={pureMD} title={'Basic'}>
                        <Pure />
                    </ExampleBlock>
                    <ExampleBlock md={RippleMD} title={'Ripple'}>
                        <Ripple />
                    </ExampleBlock>
                </section>
            </div>
        )
    }
}