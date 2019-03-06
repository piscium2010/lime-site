import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'lime/Button'
import Scroll from 'lime/Scroll'
import Checkbox from 'lime/Checkbox'
import List from 'lime/List'
import Layer from 'lime/Layer'
import S from './S'
import Select from './Select'
import Shimmer from './Shimmer'
import MultiSelect from './MultiSelect'
import Loading from './Loading'
import Li from './Li'
import Lii from './Lii'
import Menu from './Menu'
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

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: null,
            optionsII: options,
            optionsIII: options,
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

    handleMultiSelectChange = evt => {

    }

    Index = () => {
        return <h2>Home</h2>;
    }

    About = () => {
        return <h2>About</h2>;
    }

    Users = () => {
        return <h2>Users</h2>;
    }

    render() {

        // return (
        //     <Router>
        //         <Menu />
        //   </Router >
        // )
        //document.body.style.overflow = 'hidden'
        return <div style={{ padding: 0 }}>
        <Checkbox/>
            <div>
                <ul style={{width:200}}>
                    <Li title={'Coffee'}></Li>
                    <Li title={'Tea'}></Li>
                    <Li title={'Team'}>
                        <ul>
                            <Li title={'Coffee II'}></Li>
                            <Li title={'Tea II'}></Li>
                            <Li title={'Team II'}>
                                <ul>
                                    <Li title={'Coffee III'}></Li>
                                    <Li title={'Tea III'}></Li>
                                </ul>
                            </Li>
                        </ul>
                    </Li>
                </ul>
            </div>
            <br></br>

            <div>
                <ul>
                    <Lii title={'Coffee'}></Lii>
                    <Lii title={'Tea'}></Lii>
                    <Lii title={'Team s'} defaultExpand>
                        <ul>
                            <Lii title={'Coffee II'}></Lii>
                            <Lii title={'Tea II'}></Lii>
                            <Lii title={'Team II'}>
                                <ul>
                                    <Lii title={'Coffee III'}></Lii>
                                    <Lii title={'Tea III'}></Lii>
                                </ul>
                            </Lii>
                        </ul>
                    </Lii>
                </ul>
            </div>
            <br></br>
            <br></br>
            <Scroll height={500}>
                <div style={{ padding: 20, height: 800, backgroundColor: 'aliceblue' }}>
                    {/* <input style={{position: 'relative'}}/> */}
                <Select options={options} />
                </div>
            </Scroll>
            <br />
            <br />
            <Shimmer />
            <div>
                <Loading />
            </div>
            <br />
            <br />
            <div>
                <Loading text='loading' />
            </div>
            <br />
            <br />


            <div><Button>Lime</Button></div>
            <br />
            <br />
            <MultiSelect
                placeholder='multi'
                name='multiUser'
                options={this.state.optionsIII}
                onChange={this.handleMultiSelectChange}
                value={['Lorem ipsum dolor sit amet.1']}
            />
            <br />
            <br />

            <Select
                name='user'
                loading={this.state.loading}
                options={this.state.options}
                onChange={this.debouncedHandleSelectChange}
                onLoadMore={ops => {

                    this.setState({
                        loading: true
                    })

                    setTimeout(() => {
                        this.setState({
                            options: ops.concat(options),
                            loading: false
                        })
                    }, 2000)
                }}
            />
            <br></br>
            <Select
                name='user'
                loading={this.state.loading}
                options={this.state.optionsII}
                onChange={this.debouncedHandleSelectChange}
                onLoadMore={ops => {

                    this.setState({
                        loading: true
                    })

                    setTimeout(() => {
                        this.setState({
                            optionsII: ops.concat(options),
                            loading: false
                        })
                    }, 2000)
                }}
            />
            <br></br>
            <div>
                <Select options={options} />
            </div>
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