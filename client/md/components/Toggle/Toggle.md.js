const md = `import * as classnames from 'classnames'
import * as React from 'react'

export default class Toggle extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            checked: 'defaultChecked' in props ? props.defaultChecked : false
        }
    }

    get checked() {
        return 'checked' in this.props ? this.props.checked : this.state.checked
    }

    onToggle = evt => {
        const checked = !this.state.checked
        const { name } = this.props
        this.setState({ checked })
        this.props.onChange && this.props.onChange({ name, checked })
    }

    render() {
        const { children, className, name = '', ...rest } = this.props
        const classes = classnames(\`lime-toggle\`, className)
        const pegClasses = classnames(\`lime-toggle-peg\`, {
            on: this.checked
        })

        return (
            <div className={classes} onClick={this.onToggle} {...rest}>
                <div className={pegClasses}></div>
                <input name={name} type='checkbox' checked={this.checked} style={{ position: 'absolute', visibility: 'hidden' }} />
            </div>
        )
    }
}
`
export default md
