import React from 'react';
import List from './components/InlineMenu'
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

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.logoRef = React.createRef()
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
                this.ref.current.classList.add('hide')
            } else {
                this.ref.current.classList.remove('hide')
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
        return (
            <div ref={this.ref} className='nav'>
                <div ref={this.logoRef} className='lime-logo'>{"{Lime}"}</div>
                <div style={{ margin: '0 10px 0', cursor: 'pointer' }}>
                    <a href='https://github.com/piscium2010/lime' target='_blank'>
                        <i class="fab fa-github" style={{ fontSize: 30, lineHeight: '50px' }}></i>
                    </a>
                </div>
            </div>
        )
    }
}