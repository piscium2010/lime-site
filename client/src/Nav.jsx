import React from 'react';
import List from './components/InlineMenu'
import { Link } from "react-router-dom"
import GithubLink from './components/GithubLink'

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

    onClick = k => { this.setState({ activeK: k }) }

    onScroll = evt => {
        if (evt.target === document) {
            const top = document.scrollingElement.scrollTop / 1
            if (top > 50) {
                this.ref.current.classList.add('hide')
            } else if (top < 10) {
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
            <React.Fragment>
                <div className='git-fixed-link'>
                    <GithubLink />
                </div>
                <div ref={this.ref} className='nav'>
                    <div ref={this.logoRef} className='lime-logo'>
                        <Link to='/'>
                            {"{Lime}"}
                        </Link>
                    </div>

                    <div style={{ margin: '0 18px 0', cursor: 'pointer', flex: '0 0 29px' }}>
                        <GithubLink />Í
                    </div>
                </div>
            </React.Fragment>
        )
    }
}