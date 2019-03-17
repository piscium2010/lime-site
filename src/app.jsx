import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import CardPage from './pages/CardPage'
import CheckBoxPage from './pages/CheckBoxPage'
import CollapsiblePage from './pages/CollapsiblePage'
import ChoiceGroupPage from './pages/choiceGroupPage'
import DialogPage from './pages/dialogPage'
import FloatMenuPage from './pages/menu/FloatMenuPage'
import InlineMenuPage from './pages/menu/InlineMenuPage'
import ListPage from './pages/ListPage'
import LayerPage from './pages/LayerPage'
import Nav from './Nav'
import RipplePage from './pages/RipplePage'
import ScrollPage from './pages/ScrollPage'
import SelectPage from './pages/SelectPage'
import SearchPage from './pages/SearchPage'
import SpinPage from './pages/SpinPage'
import ShimmerPage from './pages/ShimmerPage'
import TogglePage from './pages/TogglePage'
import TextFieldPage from './pages/TextFieldPage'
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
                            <Route path='/choiceGroup' component={ChoiceGroupPage} />
                            <Route path='/dialog' component={DialogPage} />
                            <Route path='/list' component={ListPage} />
                            <Route path='/layer' component={LayerPage} />
                            <Route path='/menu/inlineMenu' component={InlineMenuPage} />
                            <Route path='/menu/floatMenu' component={FloatMenuPage} />
                            <Route path='/ripple' component={RipplePage} />
                            <Route path='/select' component={SelectPage} />
                            <Route path='/scroll' component={ScrollPage} />
                            <Route path='/search' component={SearchPage} />
                            <Route path='/spin' component={SpinPage} />
                            <Route path='/shimmer' component={ShimmerPage} />
                            <Route path='/toggle' component={TogglePage} />
                            <Route path='/textField' component={TextFieldPage} />
                        </div>
                    </div>
                    <Nav/>
                </React.Fragment>
            </Router >
        )
    }
}