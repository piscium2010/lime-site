import React from 'react';
import List from 'lime/List'
import { default as Dropdown } from 'lime/Layer'

export default class Select extends React.Component {
    static defaultProps = {
        lineHeight: 30,
        onBlur: () => { },
        onClick: () => { },
        onChange: () => { },
        onFocus: () => { }
    }

    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.state = {
            value: props.defaultValue || '',
            show: false
        }
    }

    get value() {
        return 'value' in this.props
            ? this.props.value // controlled
            : this.state.value // uncontroled
    }

    get text() {
        let { options = []} = this.props
        let item = options.find(o => o.value === this.value)
        return item ? item.text : ''
    }

    onBlur = evt => {
        this.isFocus = false
        this.props.onBlur(evt)
    }

    onDropdownBlur = () => {
        if (!this.isFocus) {
            this.setState({ show: false })
        }
    }

    onClick = evt => {
        this.triggerDropdownIfNeeded()
        this.props.onClick(evt)
    }

    onChange = evt => {
        this.props.onChange(evt)
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
            let { left, top, width, height } = this.ref.current.getBoundingClientRect()
            this.setState({
                left,
                top: top + height + 5,
                width,
                show
            })
        }
    }

    renderItem = it => (
        <div onClick={evt => this.onClickItem(it)}>{it.text}</div>
    )

    onWindowScroll = evt => {
        this.state.show && this.setState({ show: false })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll)
    }

    componentWillReceiveProps(nextProps) {
        this.triggerDropdownIfNeeded()
    }

    render() {
        let { left, top, width, show } = this.state
        let { lineHeight, options, style, ...rest } = this.props

        return (
            <div ref={this.ref} className='lime-select-input' style={style}>
                <input
                    {...rest}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                    value={this.text}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                />
                {
                    options &&
                    <Dropdown
                        show={show}
                        left={left}
                        top={top}
                        width={width}
                        onBlur={this.onDropdownBlur}
                    >
                        <List
                            itemHeight={lineHeight}
                            items={options}
                            renderItem={this.renderItem}
                        />
                    </Dropdown>
                }
            </div>
        )
    }
}