const md = `import React from 'react';
import Collapsible from '@piscium2010/lime/Collapsible'
import Ripple from '@piscium2010/lime/Ripple'
import '@fortawesome/fontawesome-free/css/all.css'

export default class InlineMenu extends React.Component {
    static arrowStyle = { lineHeight: '40px', float: 'right', color: 'currentColor' }

    constructor(props) {
        super(props);
        this.state = { expand: props.defaultExpand || false }
    }

    get expand() {
        return 'expand' in this.props ? this.props.expand : this.state.expand
    }

    onClick = evt => {
        if (evt.target !== evt.currentTarget) return
        const { children, onClick = () => { } } = this.props
        const { expand } = this.state
        this.setState({
            expand: children ? !expand : false,
        })
        onClick(evt)
    }

    render() {
        const { children, className = '', defaultExpand, title, onClick, ...rest } = this.props
        const arrow = this.expand
            ? <i className="fas fa-angle-up" style={InlineMenu.arrowStyle}></i>
            : <i className="fas fa-angle-down" style={InlineMenu.arrowStyle}></i>
        return (
            <React.Fragment>
                <li className={\`lime-menu-item lime-hover-text \${className}\`} onClick={this.onClick} {...rest}>
                    <span>{title}</span>
                    {children && arrow}
                    <Ripple dark/> {/*parent be position:relative, overflow: hidden*/}
                </li>
                <Collapsible expand={this.expand}>
                    {children}
                </Collapsible>
            </React.Fragment>
        )
    }
}
`
export default md
