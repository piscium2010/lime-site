import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                <Menu />
          </Router >
        )
    }
}