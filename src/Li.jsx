import React from 'react';
import Layer from 'lime/Layer'
import debounce from 'debounce'

export default class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        this.debouncedOnMouseOver = debounce(this.onMouseOver, 200)
        this.debouncedOnMouseLeave = debounce(this.onMouseLeave, 200)
    }

    onMouseOver = evt => {
        if (evt.target !== evt.currentTarget) return
        console.log(`over`, Math.random())
        let { children } = this.props
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.setState({
            show: children ? true : false,
            left: left + width,
            top
        })
    }

    onMouseLeave = evt => {
        console.log(`leave`)
        this.setState({
            show: false
        })
    }

    onBlurLayer = evt => {
        this.setState({
            show: false
        })
    }

    render() {
        let style = { background: 'aliceblue', width: 100 }
        let { show, left, top } = this.state
        let { children, title } = this.props
        return (
            <li style={style} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                {title}
                <Layer show={show} left={left} top={top} onBlur={this.onBlurLayer}>
                    {
                        children
                    }
                </Layer>
            </li>

        )
    }
}
