import React from 'react'
import Basic from '../examples/search/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/search/Basic.jsx.md'
import searchMD from '../../md/components/Search/Search.jsx.md'
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
                    <Markdown html={searchMD} />
                </section>
            </div>
        )
    }
}