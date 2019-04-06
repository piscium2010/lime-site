const md = `import React from 'react';
import List from '@piscium2010/lime/List'
import { default as Dropdown } from '@piscium2010/lime/Layer'

export default class Select extends React.Component {
    static defaultProps = {
        lineHeight: 30,
        onBlur: () => { },
        onClick: () => { },
        onChange: () => { },
        onFocus: () => { },
        renderItem: (item, select) => <div className={\`lime-list-item\`} onClick={select}>{item.text}</div>
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
        let option
        if (multi) {
            option = options.filter(o => Array.from(this.value).includes(o.value))
        } else {
            option = options.filter(o => o.value === this.value)
        }
        return option.map(o => o.text)
    }

    get node() { return this.ref.current }

    get options() {
        let { options, filter } = this.props
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
        let { options, onChange } = this.props
        let option = options && options.find(o => !o.disabled && o.text === this.inputValue)
        let triggerOnChange = option ? () => onChange(option) : null
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
            let { left, top, width, height } = this.node.getBoundingClientRect()
            this.setState({
                left,
                top: top + height + 5,
                width,
                show: this.allowInput ? true : !this.state.show
            })
        }
    }

    renderItem = item => {
        let { multi, onChange, lineHeight } = this.props
        let multiSelect = () => {
            let value = Array.from(this.value)
            let i = value.indexOf(item.value)
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
        let select = () => {
            this.setState({
                value: item.value,
                show: false,
                inputValue: undefined
            })
            onChange(item)
        }
        let itemElement = this.props.renderItem(item, multi ? multiSelect : select)
        return (
            <div style={{ lineHeight: \`\${lineHeight}px\` }}>{itemElement}</div>
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
        this.triggerDropdownIfNeeded() // trigger after loading, focus, etc
    }

    render() {
        const { left, top, width, show } = this.state
        const { className = '',
            filter,
            lineHeight,
            loading,
            name = '',
            options,
            style,
            multi,
            onChangeInput,
            ...rest } = this.props
        return (
            <div ref={this.ref} className={\`lime-select-input \${className}\`} style={style}>
                <div className='lime-select-text' style={{ lineHeight: \`\${lineHeight}px\`, opacity: this.isFocus ? 0 : 1 }}>
                    {this.text.join(',')}
                </div>
                <input
                    {...rest}
                    readOnly={this.allowInput ? false : true}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                    value={this.inputValue === undefined ? this.value : this.inputValue}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlur}
                    style={{ opacity: this.isFocus ? 1 : 0 }}
                />
                {/* <input name={name} type='hidden' value={this.value}/> */}
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
}`
export default md
