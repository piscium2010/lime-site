import React from 'react';
import List from 'lime/List'
import Layer from 'lime/Layer'

export default class Select extends React.Component {
    static defaultProps = {
        lineHeight: 30,
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
        //this.setState({ value: evt.target.textContent, show: false })
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
        console.log(`trigger multi`,)
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
        let { lineHeight, options, ...rest } = this.props

        const renderItem = it => (
            <div style={{height: 'inherit'}}>
                <input type='checkbox' style={{width:'100%', height:'100%', margin: 0}} onClick={this.onClickItem}/>
                <span style={{position:'absolute', top: 0, left: 28}}>{it.text}</span>
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