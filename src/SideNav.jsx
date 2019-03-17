import React from 'react';
import List from './components/InlineMenu'
import Scroll from 'lime/Scroll'
import { Link } from "react-router-dom"

const Li = ({ title, to, children, k, activeK, onClick = () => { }, ...rest }) => {
    let active = k == activeK
    let className = active ? 'lime-active lime-active-text lime-ribbon-right' : ''
    let menuItem = (
        <List
            title={title}
            className={className}
            onClick={() => onClick(k)}
            {...rest}>{children}
        </List>
    )
    return (
        to ? <Link to={to}>{menuItem}</Link> : menuItem
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

    onClick = k => {
        this.setState({
            activeK: k
        })
    }

    onScroll = evt => {
        let className = evt.target.getAttribute('class')
        if ('main'.indexOf(className) == 0) {
            let top = evt.target.scrollTop / 1
            if (top > 50) {
                this.logoTextRef.current.classList.add('show')
            } else {
                this.logoTextRef.current.classList.remove('show')
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, true)
    }

    render() {
        let { activeK } = this.state
        return (
            <div className='side-nav'>
                <div className='lime-logo'><span ref={this.logoTextRef} className='lime-logo-text'>{'{Lime}'}</span></div>
                <Scroll style={{ height: window.innerHeight - 50 - 10, paddingBottom: 10 }} >
                    <div className='mask'></div>
                    <div className='top shadow'></div>
                    <ul>
                        <Li k={1} activeK={activeK} onClick={this.onClick} title={'Get Started'}></Li>
                        <Li k={2} activeK={activeK} onClick={this.onClick} title={'Accordian'} to='/accordion'></Li>
                        <Li k={3} activeK={activeK} onClick={this.onClick} title={'Button'} to='/button'></Li>
                        <Li k={4} activeK={activeK} onClick={this.onClick} title={'Card'} to='/card'></Li>
                        <Li k={51} activeK={activeK} onClick={this.onClick} title={'CheckBox'} to='/checkbox'></Li>
                        <Li k={5} activeK={activeK} onClick={this.onClick} title={'ChoiceGroup'} to='/choiceGroup'></Li>
                        <Li k={6} activeK={activeK} onClick={this.onClick} title={'Collapsible'} to='/collapsible'></Li>
                        <Li k={7} activeK={activeK} onClick={this.onClick} title={'Dialog'} to='dialog'></Li>
                        <Li k={8} activeK={activeK} onClick={this.onClick} title={'Layer'} to='/layer'></Li>
                        <Li k={9} activeK={activeK} onClick={this.onClick} title={'List'} to='/list'></Li>
                        <Li k={11} activeK={activeK} title={'Menu'}>
                            <ul>
                                <Li k={12} activeK={activeK} onClick={this.onClick} title={'Inline'} to='/menu/inlineMenu'></Li>
                                <Li k={13} activeK={activeK} onClick={this.onClick} title={'Float'} to='/menu/floatMenu'></Li>
                            </ul>
                        </Li>
                        <Li k={14} activeK={activeK} onClick={this.onClick} title={'Ripple'} to='/ripple'></Li>
                        <Li k={18} activeK={activeK} onClick={this.onClick} title={'Scroll'} to='/scroll'></Li>
                        <Li k={15} activeK={activeK} onClick={this.onClick} title={'Select'} to='/select'></Li>
                        <Li k={16} activeK={activeK} onClick={this.onClick} title={'Search'} to='/search'></Li>
                        <Li k={17} activeK={activeK} onClick={this.onClick} title={'Shimmer'} to='/shimmer'></Li>
                        <Li k={19} activeK={activeK} onClick={this.onClick} title={'Spin'} to='/spin'></Li>
                        <Li k={141} activeK={activeK} onClick={this.onClick} title={'TextField'} to='/textField'></Li>
                        <Li k={142} activeK={activeK} onClick={this.onClick} title={'Toggle'} to='/toggle'></Li>
                    </ul>
                    <div className='mask'></div>
                    <div className='bottom shadow'></div>
                </Scroll>
            </div>
        )
    }
}