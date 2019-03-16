import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import CardPage from './pages/CardPage'
import FloatMenuPage from './pages/menu/FloatMenuPage'
import InlineMenuPage from './pages/menu/InlineMenuPage'
import LoadingPage from './pages/LoadingPage'
import SelectPage from './pages/SelectPage'
import TestPage from './Test'
import Button from 'lime/Button'
import Scroll from 'lime/Scroll'
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
import './atom-one-dark.css'
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
        return (
            <Router>
                <div>
                    <Menu />
                    <div className='main'>
                        <div className="main-content">
                            <Route path='/button' component={ButtonPage} />
                            <Route path='/card' component={CardPage} />
                            <Route path='/accordion' component={AccordionPage} />
                            <Route path='/loading' component={LoadingPage} />
                            <Route path='/menu/inlineMenu' component={InlineMenuPage} />
                            <Route path='/menu/floatMenu' component={FloatMenuPage} />
                            <Route path='/select' component={SelectPage} />
                            <Route path='/test' component={TestPage} />
                        </div>
                    </div>
                </div>
            </Router >
        )
    }
}