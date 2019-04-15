const md = `import React from 'react'
import classnames from 'classnames'
import ChoiceOption from './Option'
import '@piscium2010/lime/lime.css'

export default class ChoiceGroup extends React.PureComponent {
    static Option = ChoiceOption

    static defaultProps = {
        onChange: () => { }
    }

    constructor(props) {
        super(props)
        this.state = {
            value: 'defaultValue' in props ? props.defaultValue : ''
        }
    }

    get value() {
        return 'value' in this.props ? this.props.value : this.state.value
    }

    onClickChoice = (option) => {
        this.setState({ value: option.value })
        this.props.onChange(option)
    }

    render() {
        const { className, children, defaultValue, name = '', options, onChange, ...rest } = this.props
        const classes = classnames(\`lime-choice-group\`, className)

        return (
            <div className={classes} {...rest}>
                {
                    React.Children.toArray(children).map((el) => {
                        return React.cloneElement(el,
                            {
                                activeValue: this.value,
                                name,
                                onClickChoice: option => this.onClickChoice(option)
                            })
                    })
                }
            </div>
        )
    }
}
`
export default md
