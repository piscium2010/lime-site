import React from 'react';
import Button from 'lime/Button'
import Select from 'lime/Select'
import Scroll from 'lime/Scroll'
import List from 'lime/List'
import Layer from 'lime/Layer'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: 'a' + i
    })
}

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

class S extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClick = evt => {
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.setState({
            left,
            top: top + height,
            width,
            show: true
        })
    }

    onBlur = evt => {
        this.setState({ show: false })
    }

    render() {
        let { left, top, width, show } = this.state
        return <div>
            <input onClick={this.onClick} />
            <Layer
                left={left}
                top={top}
                show={show}
                onBlur={this.onBlur}
                width={width}
            >
                <List items={options.map(i => i.text)} />
            </Layer>
        </div>
    }
}

export default class App extends React.Component {
    render() {
        return <div style={{  }}>
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

            {/* <div className='sd-layer-mask' onMouseLeave={()=>console.log(`leave`,)}></div>
            <div className='sd-layer'>
                <List items={options.map(i => i.text)} />
            </div> */}
            <div>
                <S />
            </div>
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
        </div>
    }
}