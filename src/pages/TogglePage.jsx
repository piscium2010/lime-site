import React from 'react'
import Basic from '../examples/Toggle/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Toggle/Basic.jsx.md'
// import toggleMD from '../../md/components/Toggle/Toggle.jsx.md'
import Markdown from '../components/Markdown'

export default class TogglePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Spin</h2>
                <ExampleBlock md={exampleMD} title={'Basic'}>
                    <Basic />
                </ExampleBlock>
                {/* <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Spin.jsx</h4>
                    <Markdown html={toggleMD} />
                </section> */}
            </div>
        )
    }
}