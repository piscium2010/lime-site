import React from 'react';
import List from './components/InlineMenu'
import Scroll from '@piscium2010/lime/Scroll'
import { Link } from "react-router-dom"

const Li = ({ title, to, children, k, activeK, onClick = () => { }, ...rest }) => {
    const active = k == activeK
    const className = active ? 'lime-active-text lime-ribbon-right' : ''
    const menuItem = (
        <List
            title={title}
            className={className}
            {...rest}>{children}
        </List>
    )
    return (
        to ? <Link to={to} onClick={() => onClick(k)}>{menuItem}</Link> : menuItem
    )
}

export default class SideNav extends React.Component {
    constructor(props) {
        super(props)
        this.logoTextRef = React.createRef()
        this.state = {
            activeK: -1
        }
    }

    onClick = k => { this.setState({ activeK: k }) }

    render() {
        const { activeK } = this.state
        return (
            <div className='side-nav'>
                <div className='lime-logo'>
                    <span ref={this.logoTextRef} className='lime-logo-text lime-active-text'>
                        <Link to='/'>{'{Lime}'}</Link>
                    </span>
                </div>
                <Scroll style={{ height: window.innerHeight - 50 - 10, paddingBottom: 10 }} >
                    <div className='mask'></div>
                    <div className='top shadow'></div>
                    <ul>
                        <Li k={2} activeK={activeK} onClick={this.onClick} title={'Accordian'} to='/lime/accordion'></Li>
                        <Li k={3} activeK={activeK} onClick={this.onClick} title={'Button'} to='/lime/button'></Li>
                        <Li k={4} activeK={activeK} onClick={this.onClick} title={'Card'} to='/lime/card'></Li>
                        <Li k={51} activeK={activeK} onClick={this.onClick} title={'Checkbox'} to='/lime/checkbox'></Li>
                        <Li k={5} activeK={activeK} onClick={this.onClick} title={'ChoiceGroup'} to='/lime/choiceGroup'></Li>
                        <Li k={6} activeK={activeK} onClick={this.onClick} title={'Collapsible'} to='/lime/collapsible'></Li>
                        <Li k={7} activeK={activeK} onClick={this.onClick} title={'Dialog'} to='dialog'></Li>
                        <Li k={8} activeK={activeK} onClick={this.onClick} title={'Layer'} to='/lime/layer'></Li>
                        <Li k={9} activeK={activeK} onClick={this.onClick} title={'List'} to='/lime/list'></Li>
                        <Li k={11} activeK={activeK} title={'Menu'} defaultExpand>
                            <ul>
                                <Li k={12} activeK={activeK} onClick={this.onClick} title={'Inline'} to='/lime/menu/inlineMenu'></Li>
                                <Li k={13} activeK={activeK} onClick={this.onClick} title={'Float'} to='/lime/menu/floatMenu'></Li>
                            </ul>
                        </Li>
                        <Li k={14} activeK={activeK} onClick={this.onClick} title={'Ripple'} to='/lime/ripple'></Li>
                        <Li k={18} activeK={activeK} onClick={this.onClick} title={'Scroll'} to='/lime/scroll'></Li>
                        <Li k={15} activeK={activeK} onClick={this.onClick} title={'Select'} to='/lime/select'></Li>
                        <Li k={16} activeK={activeK} onClick={this.onClick} title={'Search'} to='/lime/search'></Li>
                        <Li k={17} activeK={activeK} onClick={this.onClick} title={'Shimmer'} to='/lime/shimmer'></Li>
                        <Li k={19} activeK={activeK} onClick={this.onClick} title={'Spin'} to='/lime/spin'></Li>
                        <Li k={141} activeK={activeK} onClick={this.onClick} title={'TextField'} to='/lime/textField'></Li>
                        <Li k={142} activeK={activeK} onClick={this.onClick} title={'Toggle'} to='/lime/toggle'></Li>
                        <div className='placeholder'></div>
                    </ul>
                </Scroll>
            </div>
        )
    }
}