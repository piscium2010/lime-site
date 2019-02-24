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

export default class Sl extends React.Component {
    static defaultProps = {
        lineHeight: 30,
        options,
        loading: false
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue || '',
            show: false
        }
    }

    onBlur = evt => {
        let { onBlur = () => { } } = this.props
        this.isFocus = false
        onBlur(evt)
    }

    onBlurLayer = () => {
        console.log(`blur layer`)
        this.setState({ show: false })
    }

    onClick = evt => {
        let { onClick = () => { } } = this.props
        onClick(evt)
    }

    onChange = evt => {
        let { onChange = () => { } } = this.props
        this.setState({
            value: evt.target.value
        })
        onChange(evt)
    }

    onClickItem = evt => {
        this.setState({ value: evt.target.textContent, show: false })
    }

    onFocus = evt => {
        let { onFocus = () => { } } = this.props
        this.isFocus = true
        this.triggerDropdownIfNeeded()
        onFocus(evt)
    }

    onLoadMore = () => {
        let { loading, onLoadMore, options } = this.props
        !loading && onLoadMore(options)
    }

    triggerDropdownIfNeeded = () => {
        let show = this.isFocus
        if (show && this.state.show === false) {
            let { left, top, width, height } = this.c.getBoundingClientRect()
            console.log(`width`, width)
            this.setState({
                left,
                top: top + height + 5,
                width,
                show
            })
        }
        //console.log(`this.isFocus`,this.isFocus, this.value, this.options ? this.options.length : 'no option')
        //return show
    }

    set clientRect(value) {
        this._clientRect = value
    }

    get clientRect() {
        return this._clientRect
    }

    get value() {
        return this.props.value || this.state.value
    }

    componentWillReceiveProps(nextProps) {
        this.triggerDropdownIfNeeded()
    }

    render() {
        let { left, top, width, show, value } = this.state
        let { lineHeight, options, loading, onLoadMore = null, ...rest } = this.props

        const renderItem = it => (
            <div onClick={this.onClickItem}>{it.text}</div>
        )

        const loadMore = onLoadMore && (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    lineHeight: `${lineHeight}px`,
                    cursor: 'pointer'
                }}
                onClick={this.onLoadMore}>
                更多
            </div>
        )

        return <div ref={ref => this.c = ref} className='sd-select-input'>
            <input
                {...rest}
                onFocus={this.onFocus}
                onClick={this.onClick}
                value={this.value}
                onChange={this.onChange}
            />
            {loading && <i className='sd-spin'></i>}
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
                    {loadMore}
                </Layer>
            }
        </div>
    }
}