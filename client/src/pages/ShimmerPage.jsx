import React from 'react'
import Basic from '../examples/shimmer/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/shimmer/Basic.md.js'
import shimmerMD from '../../md/components/Shimmer/Shimmer.md.js'
import Markdown from '../components/Markdown'
import PageHeader from '../components/PageHeader'
import '@piscium2010/lime/lime.css'

export default class SpinPage extends React.Component {
    render() {
        const desc = <span>Human get bored when waiting girl friend and data loading, so give them something to see while waiting. </span>
        return (
            <div>
                <PageHeader title='Shimmer' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD} title={''}>
                        <Basic />
                    </ExampleBlock>
                </section>

                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Shimmer.jsx</h4>
                    <Markdown md={shimmerMD} />
                </section>
            </div>
        )
    }
}