const md = `import * as classnames from 'classnames'
import * as React from 'react'
import '@piscium2010/lime/lime.css'

export default class Checkbox extends React.PureComponent{
    static defaultProps = {
        onChange: () => { },
        onClick: () => { }
    }

    constructor(props) {
        super(props)
        this.state = {
            checked: 'defaultChecked' in props ? props.defaultChecked : false
        }
    }

    get checked() {
        return 'checked' in this.props ? this.props.checked : this.state.checked
    }

    onClickCapture = evt => {
        const { checked } = this.state
        this.setState({ checked: !checked })
        this.props.onChange({ name: this.props.name, checked: !checked })
    }

    render() {
        const { checked } = this.state
        const { boxStyle, className, label, name = '', onChange, ...rest } = this.props
        const classes = classnames(\`lime-checkbox-wrapper\`, className)
        const boxClasses = classnames(\`lime-checkbox\`, { checked })
        return (
            <div className={classes} onClickCapture={this.onClickCapture} {...rest}>
                <span className={boxClasses} style={boxStyle}>
                    <input className={\`lime-checkbox-input\`} type='checkbox' name={name} checked={this.checked} />
                </span>
                {label && <label className={\`lime-checkbox-label\`}>{label}</label>}
            </div>
        )
    }
}
`
export default md
