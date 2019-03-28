import React from 'react'
import Basic from '../examples/Shimmer/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/Shimmer/Basic.jsx.md'
import shimmerMD from '../../md/components/Shimmer/Shimmer.jsx.md'
import Markdown from '../components/Markdown'
import '@piscium2010/lime/lime.css'

export default class SpinPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Shimmer</h2>
                <ExampleBlock md={exampleMD} title={'Basic'}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Shimmer.jsx</h4>
                    <Markdown html={shimmerMD} />
                </section>
            </div>
        )
    }
}