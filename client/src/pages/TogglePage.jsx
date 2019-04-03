import React from 'react'
import Basic from '../examples/Toggle/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Toggle/Basic.md.js'
// import toggleMD from '../../md/components/Toggle/Toggle.md.js'
import Markdown from '../components/Markdown'

export default class TogglePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Toggle</h2>
                <ExampleBlock md={exampleMD} title={'Basic'}>
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