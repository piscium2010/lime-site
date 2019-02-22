import React from 'react';
import Button from 'lime/Button'
import Select from 'lime/Select'
import Scroll from 'lime/Scroll'
import List from 'lime/List'
import Layer from 'lime/Layer'
import S from './S'
import Sl from './Sl'
import 'lime/lime.css'
import './app.less'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: 'Lorem ipsum dolor sit amet.' + i
    })
}

const optionsII = [
    { key: '1', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, totam!' },
    { key: '2', text: 'a' },
    { key: '3', text: 'a' },
    { key: '4', text: 'a' },
    { key: '5', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' },
    { key: 'a', text: 'a' }
]


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options
        }
    }
    render() {
        return <div style={{}}>

            <div><Button>Lime</Button></div>
            <br />
            <br />
            <div>
                <Select options={options} />
            </div>
            <br />
            <br />
            <div>
                <Select options={optionsII} />
            </div>
            <br />
            <br />
            <div>
                <S />
            </div>
            <br />
            <br />
            <div>
                <Sl 
                    options={this.state.options}
                    onLoadMore={options => {
                        this.setState({
                            options: options.concat(optionsII)
                        })
                    }}
                />
            </div>
            <br />
            <br />
            <div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <br />
            <br />
            <div>
                <List items={options.map(i => i.text)} />
            </div>
            {/* <div className='sd-layer-mask' onMouseLeave={()=>console.log(`leave`,)}></div>
            <div className='sd-layer'>
                <List items={options.map(i => i.text)} />
            </div> */}

            {/* <div>
                <Layer
                    left={100}
                    top={400}
                    show={true}
                    width={300}
                >
                    <List items={options.map(i => i.text)} />
                </Layer>
            </div> */}
            <button className="test tt">test</button>
        </div>
    }
}