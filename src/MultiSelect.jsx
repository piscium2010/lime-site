import React from 'react';
import List from 'lime/List'
import Layer from 'lime/Layer'

export default class Select extends React.Component {
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

    onBlur = evt => {
        let { onBlur = () => { } } = this.props
        this.isFocus = false
        onBlur(evt)
    }

    onBlurLayer = () => {
        this.setState({ show: false })
    }

    onClick = evt => {
        let { onClick = () => { } } = this.props
        onClick(evt)
    }

    onClickItem = evt => {
        let text = evt.target.value
        let i = this.value.indexOf(text)
        let value = Array.from(this.value)

        if(i >= 0) {
            value.splice(i, 1)
        } else {
            value.push(text)
        }

        this.setState({ value })
    }

    onFocus = evt => {
        let { onFocus = () => { } } = this.props
        this.isFocus = true
        this.triggerDropdownIfNeeded()
        onFocus(evt)
    }

    triggerDropdownIfNeeded = () => {
        let show = this.isFocus
        if (show && this.state.show === false) {
            let { left, top, width, height } = this.c.getBoundingClientRect()
            this.setState({
                left,
                top: top + height + 5,
                width,
                show
            })
        }
    }

    get value() {
        return this.props.value || this.state.value
    }

    render() {
        let { left, top, width, show } = this.state
        let { lineHeight, options, ...rest } = this.props

        const renderItem = it => (
            <div style={{height: 'inherit'}}>
                <input
                    name={it.key}
                    type='checkbox'
                    style={{width:'100%', height:'100%', margin: 0}}
                    onChange={this.onClickItem}
                    value={it.text}
                    checked={this.value.includes(it.text)}
                />
                <span style={{position:'absolute', top: 0, left: 30}}>{it.text}</span>
            </div>
        )

        return <div ref={ref => this.c = ref} className='sd-select-input'>
            <input
                {...rest}
                onFocus={this.onFocus}
                onClick={this.onClick}
                value={this.value}
                onChange={this.onChange}
                onBlur={this.onBlur}
            />
            {
                options &&
                <Layer
                    show={show}
                    left={left}
                    top={top}
                    width={width}
                    onBlur={this.onBlurLayer}
                >
                    <List
                        itemHeight={lineHeight}
                        items={options}
                        renderItem={renderItem}
                    />
                </Layer>
            }
        </div>
    }
}