import React from 'react'
import Layer from 'lime/Layer'
import '@fortawesome/fontawesome-free/css/all.css'
import 'lime/lime.css'

const iconStyle = { lineHeight: '30px', color: '#a0d911', padding: '0 5px' }
const itemStyle = { cursor: 'pointer', padding: '0 10px', color: '#cdcdcd', height: 30, lineHeight: '30px' }

export default class Basic extends React.Component {
    static defaultProps = {
        onSuggest: () => Promise.resolve(null)
    }

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            options: undefined,
            value: props.defaultValue || '',
            inputValue: undefined
        }
        this.searchId = 0
    }

    get value() {
        return 'value' in this.props ? this.props.value : this.state.value
    }

    onBlurLayer = evt => {
        this.setState({
            inputValue: undefined,
            show: false
        })
    }

    onChangeInput = evt => {
        const keyword = evt.target.value
        const { left, top, width, height } = evt.target.getBoundingClientRect()
        const _searchId = ++this.searchId
        setTimeout(() => {
            if (_searchId !== this.searchId) return // when user trigger multuple search, only take last one
            this.props.onSuggest(keyword).then(options => {
                if (options) {
                    this.setState({ options, left, top: top + height, width, height, show: true })
                } else {
                    this.setState({ options: undefined, show: false })
                }
            })
        }, 200) // debounce
        this.setState({
            inputValue: keyword
        })
    }

    onClickItem = evt => {
        const text = evt.target.textContent
        this.setState({ value: text, show: false, inputValue: undefined })
        this.props.onSearch && this.props.onSearch(text)
    }

    onFocusInput = evt => {
        this.setState({
            inputValue: this.value
        })
    }

    render() {
        const { onSearch, onSuggest, ...rest } = this.props
        const { show, options, left, top, width, inputValue } = this.state

        return (
            <div className='lime-select-input'>
                <input
                    onChange={this.onChangeInput}
                    value={inputValue === undefined ? this.value : inputValue}
                    onFocus={this.onFocusInput}
                    {...rest}
                />
                <i className="fas fa-search" style={iconStyle}></i>
                {
                    options &&
                    <Layer // position fixed
                        show={show}
                        left={left}
                        top={top}
                        width={width}
                        onBlur={this.onBlurLayer}
                    >
                        {
                            options.map(o => <div key={o} onClick={this.onClickItem} style={itemStyle}>{o}</div>)
                        }
                    </Layer>
                }
            </div>
        )
    }
}