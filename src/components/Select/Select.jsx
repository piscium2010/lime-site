import React from 'react';
import List from 'lime/List'
import { default as Dropdown } from 'lime/Layer'

export default class Select extends React.Component {
    static defaultProps = {
        lineHeight: 30,
        onBlur: () => { },
        onClick: () => { },
        onChange: () => { },
        onChangeInput: () => { },
        onFocus: () => { },
        renderItem: item => <div className={`lime-list-item`}>{item.value}</div>
    }

    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.state = {
            inputValue: undefined,
            value: props.defaultValue || '',
            show: false
        }
    }

    get inputValue() { return this.state.inputValue }
    get node() { return this.ref.current }

    get options() {
        let { options } = this.props
        return options && this.inputValue
            ? options.filter(o => o.value.indexOf(this.inputValue) >= 0)
            : options
    }

    get value() {
        return 'value' in this.props
            ? this.props.value // controlled
            : this.state.value // uncontroled
    }

    onBlur = evt => {
        this.isFocus = false
        this.props.onBlur(evt)
    }

    onBlurDropdown = () => {
        let { options, onChange } = this.props
        let option = options && options.find(o => !o.disabled && o.value === this.inputValue)
        let triggerOnChange = option ? () => onChange(option) : null
        setTimeout(() => {
            if (this.isFocus) { return }
            this.setState(prevState => {
                return {
                    value: option ? option.value : prevState.value,
                    inputValue: undefined,
                    show: this.isFocus ? prevState.show : false
                }
            }, triggerOnChange)
        }, 200) // spare time for onClickItem to execute
    }

    onClick = evt => {
        this.triggerDropdownIfNeeded()
        this.props.onClick(evt)
    }

    onClickItem = item => {
        this.setState({ value: item.value, show: false, inputValue: undefined })
        this.props.onChange(item)
    }

    onChangeInput = evt => {
        this.setState({ inputValue: evt.target.value });
        this.props.onChangeInput(evt)
    }

    onFocus = evt => {
        this.isFocus = true
        this.props.onFocus(evt)
    }

    triggerDropdownIfNeeded = () => {
        let show = this.isFocus
        if (show && this.state.show === false) {
            let { left, top, width, height } = this.node.getBoundingClientRect()
            this.setState({
                left,
                top: top + height + 5,
                width,
                show
            })
        }
    }

    renderItem = item => {
        let itemElement = this.props.renderItem(item)
        let onClickCapture = evt => {
            if (item.disabled) {
                this.node.getElementsByTagName('input')[0].focus()
            } else {
                this.onClickItem(item)
            }
        }
        return (<div onClickCapture={onClickCapture}>{itemElement}</div>)
    }

    onWindowScroll = evt => {
        if (this.node && this.node.contains(evt.target)) {
            return
        } else {
            this.state.show && this.setState({ show: false })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll, true)
    }

    componentWillReceiveProps() {
        this.triggerDropdownIfNeeded() // e.g. after loading
    }

    render() {
        let { left, top, width, show } = this.state
        let { className = '',
            lineHeight,
            loading,
            options,
            style,
            onChangeInput,
            ...rest } = this.props

        return (
            <div ref={this.ref} className={`lime-select-input ${className}`} style={style}>
                <input
                    {...rest}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                    value={this.inputValue === undefined ? this.value : this.inputValue}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlur}
                />
                {loading && <i className='lime-spin'></i>}
                {
                    this.options &&
                    <Dropdown // position fixed
                        show={show}
                        left={left}
                        top={top}
                        width={width}
                        onBlur={this.onBlurDropdown}
                    >
                        <List
                            itemHeight={lineHeight}
                            items={this.options.map(o => ({ ...o, key: o.value }))}
                            renderItem={this.renderItem}
                        />
                    </Dropdown>
                }
            </div>
        )
    }
}