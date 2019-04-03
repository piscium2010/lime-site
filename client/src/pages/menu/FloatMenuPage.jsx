import React from 'react'
import Basic from '../../examples/floatMenu/Basic'
import basicMD from '../../../md/examples/floatMenu/Basic.md.js'
import ExampleBlock from '../../components/ExampleBlock'
import floatMenuMD from '../../../md/components/FloatMenu/FloatMenu.md.js'
import Markdown from '../../components/Markdown'

export default class FloatMenuPage extends React.Component {
    render() {
        return (
            <div>
                <ExampleBlock md={basicMD} title='Basic'>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>FloatMenu.jsx</h4>
                    <Markdown md={floatMenuMD} />
                </section>
            </div>
        )
    }
}