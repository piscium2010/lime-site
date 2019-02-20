import React from 'react';
import Button from 'lime/Button'
import Select from 'lime/Select'
import Scroll from 'lime/Scroll'
import List from 'lime/List'
import 'lime/lime.css'

const options = [
    { key: 'a', text: 'a' }
]

const optionsII = [
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' }
]

export default class App extends React.Component {
    render() {
        return <div>
            <div><Button>Lime</Button></div>
            <div>
                <Select options={options} />
            </div>
            <div>
                <Select options={optionsII} />
            </div>
            <div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </div>
    }
}