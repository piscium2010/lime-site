import React from 'react'
import Basic from '../../examples/select/Basic'
import ExampleBlock from '../../components/ExampleBlock'
import exampleMD from '../../../md/examples/select/Basic.jsx.md'
import selectMD from '../../../md/components/Select/Select.jsx.md'
import Markdown from '../../components/Markdown'

export default class BasicPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Story</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Select.jsx</h4>
                    <Markdown html={selectMD}/>
                </section>
            </div>
        )
    }
}