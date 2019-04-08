const md = `import React from 'react';
import Layer from '@piscium2010/lime/Layer'
import debounce from 'debounce'

export default class FloatMenu extends React.Component {
    static arrowStyle = { lineHeight: '50px', float: 'right', color: 'currentColor', fontSize: 'small', marginLeft: 5 }

    constructor(props) {
        super(props);
        this.ref = React.createRef()
        this.state = { show: false }
        this.debouncedShowOrHideLayer = debounce(this.showOrHideLayer, 300)
    }

    onBlurLayer = evt => {
        if (!this.ref.current.contains(evt.target)) {
            this.debouncedShowOrHideLayer(false)
        }
    }

    onClick = evt => {
        this.setState({show: !this.state.show})
        this.props.onClick && this.props.onClick(evt)
    }

    onMouseOverTitle = evt => {
        if (evt.target !== evt.currentTarget) return
        if (!this.props.children) return
        const { placement } = this.props
        const { left, top, width, height } = evt.target.getBoundingClientRect()
        let x, y
        switch (placement) {
            case 'down':
                x = left
                y = top + height
                break
            case 'right':
                x = left + width
                y = top
                break
        }
        this.debouncedShowOrHideLayer(/*show=*/true, x, y, width)
    }

    onMouseLeave = evt => {
        this.debouncedShowOrHideLayer(false)
    }

    showOrHideLayer = (show, left, top, width) => {
        this.setState({show, left, top, width})
    }

    componentWillUnmount() {
        this.debouncedShowOrHideLayer.clear()
    }

    render() {
        const { show, left, top, width } = this.state
        const { className = '', children, title, placement, ...rest } = this.props
        const arrow = <i className={\`fas fa-angle-\${placement}\`} style={FloatMenu.arrowStyle}></i>
        return (
            <li
                {...rest}
                ref={this.ref}
                style={{ listStyle: 'none' }}
                className={\`\${className}\`}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}
            >
                <div className="lime-menu-item lime-hover-text"
                    style={{ height: 50, lineHeight: '50px' }}
                    onMouseOver={this.onMouseOverTitle}
                >
                    {title}
                    {children ? arrow : null}
                </div>
                <Layer
                    show={show}
                    style={{ minWidth: width }}
                    left={left}
                    top={top}
                    onBlur={this.onBlurLayer}>
                    {children}
                </Layer>
            </li>
        )
    }
}
`
export default md
