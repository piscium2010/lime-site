import React from 'react';
import Button from 'lime/Button'
import Select from 'lime/Select'
import Scroll from 'lime/Scroll'
import List from 'lime/List'
import Layer from 'lime/Layer'
import 'lime/lime.css'
import './app.less'

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
    static defaultProps = {
        lineHeight: 30
    }
    
    constructor(props) {
        super(props)
        this.state = {}
    }

    onClick = evt => {
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.setState({
            left,
            top: top + height + 5,
            width,
            show: true
        })
    }

    onBlur = evt => {
        this.setState({ show: false })
    }

    onClickItem = evt => {
        this.setState({ value: evt.target.textContent, show: false })
    }

    render() {
        let { left, top, width, show, value } = this.state
        let { lineHeight } = this.props
        return <div className='sd-select-input'>
            <input onClick={this.onClick} value={value} />
            <Layer
                left={left}
                top={top}
                show={show}
                onBlur={this.onBlur}
                width={width}
            >
                <List
                    itemHeight={lineHeight}
                    items={options}
                    renderItem={it => {
                        return (
                            <div onClick={this.onClickItem}>{it.text}</div>
                        )
                    }}
                />
            </Layer>
        </div>
    }
}

export default class App extends React.Component {
    render() {
        return <div style={{}}>
       
            <div><Button>Lime</Button></div>
            <br/>
            <br/>
            <div>
                <Select options={options} />
            </div>
            <br/>
            <br/>
            <div>
                <Select options={optionsII} />
            </div>
            <br/>
            <br/>
            <div>
                <S />
            </div>
            <br/>
            <br/>
            <div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <br/>
            <br/>
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