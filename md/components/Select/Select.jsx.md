```javascript
import React from 'react';
import List from 'lime/List'
import Layer from 'lime/Layer'

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
        this.setState({
            value: evt.target.value
        })
        this.props.onChange(evt)
    }

    onClickItem = evt => {
        this.setState({ value: evt.target.textContent, show: false })
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
        <div onClick={this.onClickItem}>{it.text}</div>
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
        let { lineHeight, options, ...rest } = this.props

        return <div ref={this.ref} className='lime-select-input'>
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
                    onBlur={this.onDropdownBlur}
                >
                    <List
                        itemHeight={lineHeight}
                        items={options}
                        renderItem={this.renderItem}
                    />
                </Layer>
            }
        </div>
    }
}
```