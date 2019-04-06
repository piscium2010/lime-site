import React from 'react'
import Basic from '../../examples/floatMenu/Basic'
import basicMD from '../../../md/examples/floatMenu/Basic.md.js'
import ExampleBlock from '../../components/ExampleBlock'
import floatMenuMD from '../../../md/components/FloatMenu/FloatMenu.md.js'
import Markdown from '../../components/Markdown'
import PageHeader from '../../components/PageHeader'

export default class FloatMenuPage extends React.Component {
    render() {
        const desc = <span>Serve as navigation or list of commands</span>
        return (
            <div>
                <PageHeader title='Float Menu' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={basicMD} title=''>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>FloatMenu.jsx</h4>
                    <Markdown md={floatMenuMD} />
                </section>
            </div>
        )
    }
}