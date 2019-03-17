import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import CardPage from './pages/CardPage'
import CheckBoxPage from './pages/CheckBoxPage'
import CollapsiblePage from './pages/CollapsiblePage'
import choiceGroupPage from './pages/choiceGroupPage'
import FloatMenuPage from './pages/menu/FloatMenuPage'
import InlineMenuPage from './pages/menu/InlineMenuPage'
import LoadingPage from './pages/LoadingPage'
import Nav from './Nav'
import SelectPage from './pages/SelectPage'
import SideNav from './SideNav'
import './atom-one-dark.css'
import 'lime/lime.css'
import './app.less'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <SideNav />
                    <div className='main'>
                        <div className="main-content">
                            <Route path='/button' component={ButtonPage} />
                            <Route path='/card' component={CardPage} />
                            <Route path='/accordion' component={AccordionPage} />
                            <Route path='/checkbox' component={CheckBoxPage} />
                            <Route path='/collapsible' component={CollapsiblePage} />
                            <Route path='/choiceGroup' component={choiceGroupPage} />
                            <Route path='/loading' component={LoadingPage} />
                            <Route path='/menu/inlineMenu' component={InlineMenuPage} />
                            <Route path='/menu/floatMenu' component={FloatMenuPage} />
                            <Route path='/select' component={SelectPage} />
                        </div>
                    </div>
                    <Nav/>
                </React.Fragment>
            </Router >
        )
    }
}