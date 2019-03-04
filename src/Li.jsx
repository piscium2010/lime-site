import React from 'react';
import Layer from 'lime/Layer'
import debounce from 'debounce'

export default class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        this.debouncedShowOrHideLayer = debounce(this.showOrHideLayer, 300)
    }

    onMouseOver = evt => {
        if (evt.target !== evt.currentTarget) return
        let { children } = this.props
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.debouncedShowOrHideLayer(children ? true : false, left + width, top)
    }

    onMouseLeave = evt => {
        this.debouncedShowOrHideLayer(false)
    }

    onBlurLayer = evt => {
        this.debouncedShowOrHideLayer(false)
    }

    onClick = evt => {
        let { onClick = () => {}} = this.props
        this.debouncedShowOrHideLayer(false)
        onClick(evt)
    }

    showOrHideLayer = (show, left, top) => {
        this.setState({
            show,
            left,
            top
        })
    }

    render() {
        let { show, left, top } = this.state
        let { children, title } = this.props
        return (
            <li className={`sd-menu-item`}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}>
                {title}
                <Layer 
                    show={show}
                    left={left}
                    top={top}
                    onBlur={this.onBlurLayer}>
                    {children}
                </Layer>
            </li>
        )
    }
}
