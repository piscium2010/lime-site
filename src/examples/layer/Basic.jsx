import React from 'react'
import Layer from '@piscium2010/lime/Layer'
import '@piscium2010/lime/lime.css'

const translation = ['石原里美', '新垣结衣', '三上悠亚']
const layerStyle = { transform: 'translate(-50%,-100%)' }
const tooltipStyle = { background: 'rgba(0,0,0,.56)', color: 'white', fontSize: '.8em', padding: 10 }

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: 0,
            top: 0,
            show: false
        }
    }

    onMouseOver = (evt, i) => {
        const { left, top, height, width } = evt.target.getBoundingClientRect()
        this.setState({
            show: true,
            left: left + width / 2,
            top,
            text: translation[i]
        })
    }

    onMouseLeave = () => {
        this.setState({ show: false })
    }

    render() {
        const { show, left, top, text } = this.state

        return (
            <div>
                <button
                    className='lime-button text'
                    onMouseOver={evt => this.onMouseOver(evt, 0)}
                    onMouseLeave={this.onMouseLeave}
                >
                    Satomi Ishihara
                </button>
                <button
                    className='lime-button text'
                    onMouseOver={evt => this.onMouseOver(evt, 1)}
                    onMouseLeave={this.onMouseLeave}
                >
                    Yui Aragaki
                </button>
                <button
                    className='lime-button text'
                    onMouseOver={evt => this.onMouseOver(evt, 2)}
                    onMouseLeave={this.onMouseLeave}
                >
                    Yua Mikami
                </button>
                <Layer show={show} left={left} top={top} style={layerStyle}>
                    <div style={tooltipStyle}>
                        {text}
                    </div>
                </Layer>
            </div>
        )
    }
}