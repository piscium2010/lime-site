import React from 'react'
import Basic from '../examples/Toggle/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Toggle/Basic.md.js'
import PageHeader from '../components/PageHeader'
// import toggleMD from '../../md/components/Toggle/Toggle.md.js'
import Markdown from '../components/Markdown'

export default class TogglePage extends React.Component {
    render() {
        const desc = <span>Human get bored when waiting girl friend and data loading, so give them something to see while waiting. </span>
        return (
            <div>
                <PageHeader title='Toggle' desc={desc} />
                <h2>Usage</h2>
                <ExampleBlock md={exampleMD} title={''}>
                    <Basic />
                </ExampleBlock>
                {/* <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Spin.jsx</h4>
                    <Markdown md={toggleMD} />
                </section> */}
            </div>
        )
    }
}