import React from 'react';
import Layer from 'lime/Layer'

class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    onClick = evt => {
        let { children } = this.props
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.setState({
            show: children ? true : false,
            left: left + width,
            top
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
            <React.Fragment>
                <li style={style} onClick={this.onClick}>{title}</li>
                <Layer show={show} left={left} top={top} onBlur={this.onBlurLayer}>
                    {
                        children
                    }
                </Layer>
            </React.Fragment>
        )
    }
}

export default class Menu extends React.Component {
    static defaultProps = {
        lineHeight: 30
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || [],
            show: false
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <Li title={'Coffee'}></Li>
                    <Li title={'Tea'}></Li>
                    <Li title={'Team'}>
                        <ul>
                            <Li title={'Coffee II'}></Li>
                            <Li title={'Tea II'}></Li>
                            <Li title={'Team II'}>
                                <ul>
                                    <Li title={'Coffee III'}></Li>
                                    <Li title={'Tea III'}></Li>
                                </ul>
                            </Li>
                        </ul>
                    </Li>
                </ul>
            </div>
        )
    }
}