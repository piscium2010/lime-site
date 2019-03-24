import React from 'react'
import Search from '../../components/Search'

const data = [
    `1Lorem ipsum dolor sit amet`,
    `2Lorem ipsum dolor sit amet`,
    `3Lorem ipsum dolor sit amet`,
    `4Lorem ipsum dolor sit amet`,
    `5Lorem ipsum dolor sit amet`
]


export default class Basic extends React.Component {
    onSuggest = keyword => {
        // simulating fetch
        return new Promise((resolve, reject)=>{
            const result = keyword ? data.filter(d => d.indexOf(keyword) >= 0) : null
            resolve(result)
        })
    }

    onSearch = keyword => {
        console.log(`search:`, keyword)
    }

    render() {
        return (
            <div style={{maxWidth: 400}}>
                <Search
                    placeholder='Search...'
                    onSuggest={this.onSuggest}
                    onSearch={this.onSearch}
                />
            </div>
        )
    }
}