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
        to ? <Link to={to} onClick={onClick}>{menuItem}</Link> : menuItem
    )
}

export default class SideNav extends React.Component {
    logoTextRef = React.createRef()

    get activeK() {
        let activeK = -1
        const search = window.location.search
        const match = search.match(/activeK=\d+/)
        if(match && match.length > 0) {
            activeK = match[0].match(/\d+/)[0]
        }
        return activeK
    }

    onClick = () => { 
        // window.scroll(0,0)
        this.forceUpdate() 
    }

    render() {
        let k = 0
        const activeK = this.activeK
        return (
            <div className='side-nav'>
                <div className='lime-logo'>
                    <span ref={this.logoTextRef} className='lime-logo-text lime-active-text'>
                        <Link to='/'>{'{Lime}'}</Link>
                    </span>
                </div>
                <Scroll style={{ height: '100vh' }} >
                    <div className='mask'></div>
                    <div className='top shadow'></div>
                    <ul>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Quick Start'} to={`/lime/quickStart?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Accordian'} to={`/lime/accordion?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Button'} to={`/lime/button?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Card'} to={`/lime/card?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Checkbox'} to={`/lime/checkbox?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'ChoiceGroup'} to={`/lime/choiceGroup?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Collapsible'} to={`/lime/collapsible?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Dialog'} to={`/lime/dialog?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Layer'} to={`/lime/layer?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'List'} to={`/lime/list?activeK=${k++}`}></Li>
                        <Li k={k++} activeK={activeK} title={'Menu'} defaultExpand>
                            <ul>
                                <Li k={k} activeK={activeK} onClick={this.onClick} title={'Inline'} to={`/lime/menu/inlineMenu?activeK=${k++}`}></Li>
                                <Li k={k} activeK={activeK} onClick={this.onClick} title={'Float'} to={`/lime/menu/floatMenu?activeK=${k++}`}></Li>
                            </ul>
                        </Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Ripple'} to={`/lime/ripple?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Scroll'} to={`/lime/scroll?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Select'} to={`/lime/select?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Search'} to={`/lime/search?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Shimmer'} to={`/lime/shimmer?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Spin'} to={`/lime/spin?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'TextField'} to={`/lime/textField?activeK=${k++}`}></Li>
                        <Li k={k} activeK={activeK} onClick={this.onClick} title={'Toggle'} to={`/lime/toggle?activeK=${k++}`}></Li>
                        <div className='placeholder'></div>
                    </ul>
                </Scroll>
            </div>
        )
    }
}