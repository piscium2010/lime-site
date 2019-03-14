import React from 'react';
import List from 'lime/List'
import { default as Dropdown } from 'lime/Layer'

const EVENT_DELAYED1 = 200
const EVENT_DELAYED2 = EVENT_DELAYED1 + 100

export default class Select extends React.Component {
    static defaultProps = {
        lineHeight: 30,
        onBlur: () => { },
        onClick: () => { },
        onChange: () => { },
        onChangeInput: () => { },
        onFocus: () => { }
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

    get inputValue() {
        // let { inputValue } = this.state
        // return inputValue === undefined ? this.value : inputValue
        return this.state.inputValue
    }

    get node() {
        return this.ref.current
    }

    get options() {
        let { options } = this.props
        if (!this.inputValue) {
            return options
        } else {
            return options && options.filter(o => o.value.indexOf(this.inputValue) >= 0)
        }
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
        let option = options && options.find(o => o.value === this.inputValue)
        let cb = option ? () => onChange(option) : null

        setTimeout(() => {
            this.setState(prevState => {
                return {
                    value: option ? option.value : prevState.value,
                    inputValue: undefined,
                    show: this.isFocus ? prevState.show : false
                }
            }, cb)
        }, EVENT_DELAYED1) // spare time for onClickItem to execute
    }

    onClick = evt => {
        this.triggerDropdownIfNeeded()
        this.props.onClick(evt)
    }

    onChangeInput = evt => {
        this.setState({ inputValue: evt.target.value });
        this.props.onChangeInput(evt)
    }

    onClickItem = item => {
        this.setState({ value: item.value, show: false })
        this.props.onChange(item)
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
        let { renderItem = it => it.value } = this.props
        console.log(`renderItem`,renderItem)
        return (
            <div onClickCapture={evt => this.onClickItem(item)}>{renderItem(item)}</div>
        )
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
        this.triggerDropdownIfNeeded()
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
                    <Dropdown
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