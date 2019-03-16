import React from 'react';
import Layer from 'lime/Layer'
import debounce from 'debounce'

export default class FloatMenu extends React.Component {
    static arrowStyle = { lineHeight: '40px', float: 'right', color: '#404040', fontSize: 'small', marginLeft: 5 }

    constructor(props) {
        super(props);
        this.state = { show: false }
        this.debouncedShowOrHideLayer = debounce(this.showOrHideLayer, 200)
    }

    onBlurLayer = evt => {
        this.debouncedShowOrHideLayer(false)
    }

    onClick = evt => {
        this.debouncedShowOrHideLayer(false)
        this.props.onClick && this.props.onClick(evt)
    }

    onMouseOver = evt => {
        if (evt.target !== evt.currentTarget) return
        let { children, placement } = this.props
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        let x, y
        switch(placement) {
            case 'down':
                x = left
                y = top + height
                break
            case 'right':
                x = left + width
                y = top
                break
        }
        this.debouncedShowOrHideLayer(children ? true : false, x, y, width)
    }

    onMouseLeave = evt => {
        this.debouncedShowOrHideLayer(false)
    }

    showOrHideLayer = (show, left, top, width) => {
        this.setState({ show, left, top, width })
    }

    componentWillUnmount() {
        this.debouncedShowOrHideLayer.clear()
    }

    render() {
        let { show, left, top, width } = this.state
        let { className, children, title, placement, ...rest } = this.props
        let arrow = <i className={`fas fa-angle-${placement}`} style={FloatMenu.arrowStyle}></i>

        return (
            <li className={`lime-menu-item ${className}`}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}
                {...rest}
                >
                <span>{title}</span>
                {children && arrow}
                <Layer
                    show={show}
                    style={{minWidth: width}}
                    left={left}
                    top={top}
                    onBlur={this.onBlurLayer}>
                    {children}
                </Layer>
            </li>
        )
    }
}
