import React from 'react'
import Basic from '../examples/search/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/search/Basic.md.js'
import searchMD from '../../md/components/Search/Search.md.js'
import Markdown from '../components/Markdown'
import PageHeader from '../components/PageHeader'

export default class SearchPage extends React.Component {
    render() {
        const desc = <span>An input field for searching through content</span>
        return (
            <div>
                <PageHeader title='Search' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD}>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Search.jsx</h4>
                    <Markdown md={searchMD} />
                </section>
            </div>
        )
    }
}