import React from 'react';
import Layer from 'lime/Layer'

let Li = props => {
    return (
        <li {...props}>{props.children}</li>
    )
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

    onClick = evt => {
        console.log(`click`,)
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.setState({
            show: true,
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

        let { left, top, width, show } = this.state
        let { lineHeight, options, ...rest } = this.props
        let style ={background: 'aliceblue', width:100}
        // let Li = props => {
        //     return (
        //         <li {...props} onClick={this.onClick}>{props.children}</li>
        //     )
        // }
        return (
            <div>
                <ul>
                    <Li onClick={this.onClick} style={style}>Coffee</Li>
                    <Li onClick={this.onClick} style={style}>Tea</Li>
                    <Li onClick={this.onClick} style={style}>
                        <ul>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                        </ul>
                    </Li>
                </ul>
                <Layer show={show} left={left} top={top} onBlur={this.onBlurLayer}> 
                    <div>
                        test
                    </div>
                </Layer>
            </div>
        )
    }
}