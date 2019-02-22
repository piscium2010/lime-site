import React from 'react';
import List from 'lime/List'
import Layer from 'lime/Layer'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: 'Lorem ipsum dolor sit amet.' + i
    })
}

export default class S extends React.Component {
    static defaultProps = {
        lineHeight: 30
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    onClick = evt => {
        let { left, top, width, height } = evt.target.getBoundingClientRect()
        this.setState({
            left,
            top: top + height + 5,
            width,
            show: true
        })
    }

    onBlur = evt => {
        this.setState({ show: false })
    }

    onClickItem = evt => {
        this.setState({ value: evt.target.textContent, show: false })
    }

    render() {
        let { left, top, width, show, value } = this.state
        let { lineHeight } = this.props
        return <div className='sd-select-input'>
            <input onClick={this.onClick} value={value} />
            <Layer
                show={show}
                left={left}
                top={top}
                width={width}
                onBlur={this.onBlur}
            >
                <List
                    itemHeight={lineHeight}
                    items={options}
                    renderItem={it => {
                        return (
                            <div onClick={this.onClickItem}>{it.text}</div>
                        )
                    }}
                />
            </Layer>
        </div>
    }
}