import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import CardPage from './pages/CardPage'
import CheckBoxPage from './pages/CheckBoxPage'
import CollapsiblePage from './pages/CollapsiblePage'
import ChoiceGroupPage from './pages/choiceGroupPage'
import DialogPage from './pages/dialogPage'
import FloatMenuPage from './pages/menu/FloatMenuPage'
import GetStartedPage from './pages/GetStartedPage'
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
import SideNav from './SideNav'
import TogglePage from './pages/TogglePage'
import TextFieldPage from './pages/TextFieldPage'
import 'lime/lime.css'
import './atom-one-dark.css'
import './app.less'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path='/' exact component={GetStartedPage} />
                    <Route path='/lime/' component={SideNav} />
                    <div className='main'>
                        <div className="main-content">
                            <Route path='/lime/button' component={ButtonPage} />
                            <Route path='/lime/card' component={CardPage} />
                            <Route path='/lime/accordion' component={AccordionPage} />
                            <Route path='/lime/checkbox' component={CheckBoxPage} />
                            <Route path='/lime/collapsible' component={CollapsiblePage} />
                            <Route path='/lime/choiceGroup' component={ChoiceGroupPage} />
                            <Route path='/lime/dialog' component={DialogPage} />
                            <Route path='/lime/list' component={ListPage} />
                            <Route path='/lime/layer' component={LayerPage} />
                            <Route path='/lime/menu/inlineMenu' component={InlineMenuPage} />
                            <Route path='/lime/menu/floatMenu' component={FloatMenuPage} />
                            <Route path='/lime/ripple' component={RipplePage} />
                            <Route path='/lime/scroll' component={ScrollPage} />
                            <Route path='/lime/select' component={SelectPage} />
                            <Route path='/lime/search' component={SearchPage} />
                            <Route path='/lime/spin' component={SpinPage} />
                            <Route path='/lime/start' component={GetStartedPage} />
                            <Route path='/lime/shimmer' component={ShimmerPage} />
                            <Route path='/lime/toggle' component={TogglePage} />
                            <Route path='/lime/textField' component={TextFieldPage} />
                        </div>
                    </div>
                    <Route path='/lime/' component={Nav} />
                </React.Fragment>
            </Router >
        )
    }
}