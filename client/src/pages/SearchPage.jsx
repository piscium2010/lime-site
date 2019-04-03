import React from 'react'
import Basic from '../examples/search/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/search/Basic.md.js'
import searchMD from '../../md/components/Search/Search.md.js'
import Markdown from '../components/Markdown'

export default class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Search</h2>
                <ExampleBlock md={exampleMD}>
                    <Basic />
                </ExampleBlock>
                <h2>Build it yourself</h2>
                <section className='implement'>
                <h4>Search.jsx</h4>
                    <Markdown md={searchMD} />
                </section>
            </div>
        )
    }
}