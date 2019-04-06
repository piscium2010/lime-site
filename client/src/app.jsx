import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import ReactDOM from 'react-dom'
import GetStartedPage from './pages/GetStartedPage'
import Nav from './Nav'
import SideNav from './SideNav'
import Spin from './components/Spin'
import '@piscium2010/lime/lime.css'
import './atom-one-dark.css'
import './app.less'

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path='/' exact component={GetStartedPage} />
                    <Route path='/lime/' component={SideNav} />
                    <div className='main'>
                        <div className="main-content">
                            <Route path='/lime/button' component={lazyLoadPage('ButtonPage')} />
                            <Route path='/lime/card' component={lazyLoadPage('CardPage')} />
                            <Route path='/lime/accordion' component={lazyLoadPage('AccordionPage')} />
                            <Route path='/lime/checkbox' component={lazyLoadPage('CheckBoxPage')} />
                            <Route path='/lime/collapsible' component={lazyLoadPage('CollapsiblePage')} />
                            <Route path='/lime/choiceGroup' component={lazyLoadPage('ChoiceGroupPage')} />
                            <Route path='/lime/dialog' component={lazyLoadPage('DialogPage')} />
                            <Route path='/lime/list' component={lazyLoadPage('ListPage')} />
                            <Route path='/lime/layer' component={lazyLoadPage('LayerPage')} />
                            <Route path='/lime/menu/inlineMenu' component={lazyLoadPage('menu/InlineMenuPage')} />
                            <Route path='/lime/menu/floatMenu' component={lazyLoadPage('menu/FloatMenuPage')} />
                            <Route path='/lime/ripple' component={lazyLoadPage('RipplePage')} />
                            <Route path='/lime/scroll' component={lazyLoadPage('ScrollPage')} />
                            <Route path='/lime/select' component={lazyLoadPage('SelectPage')} />
                            <Route path='/lime/search' component={lazyLoadPage('SearchPage')} />
                            <Route path='/lime/spin' component={lazyLoadPage('SpinPage')} />
                            <Route path='/lime/start' component={lazyLoadPage('GetStartedPage')} />
                            <Route path='/lime/shimmer' component={lazyLoadPage('ShimmerPage')} />
                            <Route path='/lime/toggle' component={lazyLoadPage('TogglePage')} />
                            <Route path='/lime/textField' component={lazyLoadPage('TextFieldPage')} />
                        </div>
                    </div>
                    <Route path='/lime/' component={Nav} />
                </React.Fragment>
            </Router >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

function lazyLoadPage(componentName) {
    return class LazyLoadComponent extends React.Component {
        state = { loading: true, component: null }

        componentDidMount() {
            import('./pages/' + componentName).then(module => {
                this.setState({
                    loading: false,
                    component: module.default
                })
            })
        }

        render() {
            const style = {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
            const { loading, component: C } = this.state
            return loading ? <div style={style}><Spin show threshold={3000} /></div> : <C />
        }
    }
}