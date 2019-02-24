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
import debounce from 'debounce'

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
            options: null,
            loading: false
        }
        this.debouncedHandleSelectChange = debounce(this.handleSelectChange, 300)
    }

    handleSelectChange = evt => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                options,
                loading: false
            })
        }, 1000);
    }

    render() {
        return <div style={{ padding: 10 }}>

            <div><Button>Lime</Button></div>
            <br />
            <br />
            <Sl
                name='user'
                loading={this.state.loading}
                options={this.state.options}
                onChange={this.debouncedHandleSelectChange}
                onLoadMore={options => {

                    this.setState({
                        loading: true
                    })

                    setTimeout(() => {
                        this.setState({
                            options: options.concat(optionsII),
                            loading: false
                        })
                    }, 2000)
                }}
            />
            <br></br>
            <br></br>
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
            {/* <div>
                <List items={options.map(i => i.text)} />
            </div> */}
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
            <div style={{ width: 15, height: 15 }}>
                <div className="sd-spin"></div>
            </div>
        </div>
    }
}