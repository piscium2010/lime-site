import React from 'react';
import List from '@piscium2010/lime/List'
import { default as Dropdown } from '@piscium2010/lime/Layer'

const arrowStyle = { position: 'absolute', top: 0, right: 0, paddingRight: '10px' }
const spinStyle = { width: 20, height: 20, alignSelf: 'center', marginRight: 5 }

export default class Select extends React.Component {
    static defaultProps = {
        lineHeight: 30,
        onBlur: () => { },
        onClick: () => { },
        onChange: () => { },
        onFocus: () => { },
        renderItem: (item, select) => <div className={`lime-list-item`} onClick={select}>{item.text}</div>
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

    get allowInput() {
        return (this.props.onChangeInput || this.props.filter) ? true : false
    }

    get inputValue() { return this.state.inputValue }

    get text() {
        const { multi, options = [] } = this.props
        let selectedOption
        if (multi) {
            selectedOption = options.filter(o => Array.from(this.value).includes(o.value))
        } else {
            selectedOption = options.filter(o => o.value === this.value)
        }
        return selectedOption.map(o => o.text)
    }

    get node() { return this.ref.current }

    get options() {
        const { options, filter } = this.props
        return this.inputValue && filter
            ? filter(this.inputValue, options)
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
        const { options, onChange } = this.props
        const option = options && options.find(o => !o.disabled && o.text === this.inputValue)
        const triggerOnChange = option ? () => onChange(option) : null
        setTimeout(() => {
            if (!this.isFocus || !this.allowInput) {
                this.setState(prevState => {
                    return {
                        value: option ? option.value : prevState.value,
                        inputValue: this.isFocus ? prevState.inputValue : undefined,
                        show: this.isFocus ? prevState.show : false
                    }
                }, triggerOnChange)
            }
        }, 200) // spare time for item click event to execute
    }

    onClick = evt => {
        this.triggerDropdownIfNeeded()
        this.props.onClick(evt)
    }

    onChangeInput = evt => {
        this.setState({ inputValue: evt.target.value })
        this.props.onChangeInput && this.props.onChangeInput(evt)
    }

    onFocus = evt => {
        this.isFocus = true
        this.setState({ inputValue: this.text })
        this.props.onFocus(evt)
    }

    triggerDropdownIfNeeded = () => {
        if (this.isFocus) {
            const { left, top, width, height } = this.node.getBoundingClientRect()
            this.setState({
                left,
                top: top + height + 2,
                width,
                show: this.allowInput ? true : !this.state.show
            })
        }
    }

    renderSelectItem = item => {
        const { multi, onChange, lineHeight } = this.props
        const multiSelect = () => {
            const value = Array.from(this.value)
            const i = value.indexOf(item.value)
            if (i >= 0) {
                value.splice(i, 1)
            } else {
                value.push(item.value)
            }
            this.setState({
                value,
                inputValue: undefined
            })
            onChange(value)
        }
        const select = () => {
            this.setState({
                value: item.value,
                show: false,
                inputValue: undefined
            })
            onChange(item)
        }
        const selected = multi ? Array.from(this.value).includes(item.value) : this.value === item.value
        const itemElement = this.props.renderItem(item, multi ? multiSelect : select, selected)
        return (
            <div className={`${selected ? 'lime-active-text' : ''}`} style={{ lineHeight: `${lineHeight}px` }}>{itemElement}</div>
        )
    }

    onWindowScroll = evt => {
        if (!this.node.contains(evt.target) && this.state.show) { // hide dropdown when window scrolling
            this.setState({ show: false })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll)
    }

    componentWillReceiveProps() {
        this.triggerDropdownIfNeeded() // trigger after loading, focus, etc
    }

    render() {
        const { left, top, width, show } = this.state
        const {
            className = '',
            filter,
            lineHeight,
            loading,
            name = '',
            options,
            style,
            multi,
            onChangeInput,
            ...rest } = this.props
        const spin = <i className='lime-spin' style={spinStyle}></i>
        const arrow = <i className={`fas fa-angle-down`} style={{ ...arrowStyle, lineHeight: `${lineHeight}px` }}></i>
        const showText = !this.isFocus && this.text != ''
        const displayText = <div className='lime-select-text' style={{ opacity: showText ? 1 : 0, lineHeight: `${lineHeight}px` }}>{this.text.join(',')}</div>

        return (
            <div ref={this.ref} className={`lime-select-input ${className}`} style={style}>
                {displayText}
                <input
                    {...rest}
                    readOnly={this.allowInput ? false : true}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                    value={this.inputValue === undefined ? this.value : this.inputValue}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlur}
                    style={{ opacity: showText ? 0 : 1 }}
                />
                {loading ? spin : arrow}
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
                            renderItem={this.renderSelectItem}
                        />
                    </Dropdown>
                }
            </div>
        )
    }
}