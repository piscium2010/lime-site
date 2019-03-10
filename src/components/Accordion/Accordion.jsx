import React from 'react'
import Panel from './Panel'

export { Panel }

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