import * as classnames from 'classnames'
import * as React from 'react'
import '@piscium2010/lime/lime.css'

export default class Option extends React.PureComponent {
    static defaultProps = {
        onClick: () => { }
    }
    
    onClick = evt => {
        this.props.onClickChoice({ value: this.props.value })
        this.props.onClick(evt)
    }

    render() {
        const { value, activeValue, onClick, ...rest } = this.props
        const checked = value === activeValue
        const choiceClasses = classnames(`lime-choice`, {
            selected: checked
        })

        return (
            <div className={choiceClasses} onClick={this.onClick} {...rest}>
                <div key={0} className={`lime-choice-radio`}></div>
                <div key={1} className={`lime-choice-text`}>{this.props.children}</div>
                <input key={2} type="radio" name={name} value={value} checked={checked}></input>
            </div>
        )
    }
}
