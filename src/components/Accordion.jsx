import React from 'react'
import Collapsible from 'lime/Collapsible'

class Panel extends React.Component {
    render() {
        let { title, children, activeKey, eventKey, ...rest } = this.props
        return (
            <React.Fragment>
                <h5 eventkey={eventKey} {...rest}>{title}</h5>
                <Collapsible expand={activeKey == eventKey}>
                    {children}
                </Collapsible>
            </React.Fragment>
        )
    }
}

export default class Accordion extends React.Component {
    static Panel = Panel

    constructor(props) {
        super(props)
        this.state = {
            activeKey: props.defaultActiveKey || ''
        }
    }

    get activeKey() {
        return 'activeKey' in this.props ? this.props.activeKey : this.state.activeKey
    }

    onClick = evt => {
        let eventKey = evt.target.getAttribute('eventKey')
        if (eventKey) {
            this.setState(preState => ({
                activeKey: eventKey == preState.activeKey ? '' : eventKey
            }))
        }
    }

    render() {
        let { children, defaultActiveKey, ...rest } = this.props

        return (
            <div onClickCapture={this.onClick} {...rest}>
                {
                    React.Children.toArray(children).map(el =>
                        React.cloneElement(el, { activeKey: this.activeKey })
                    )
                }
            </div>
        )
    }
}