import React from 'react'
import Collapsible from '@piscium2010/lime/Collapsible'

export default class Panel extends React.Component {
    render() {
        const { title, children, activeKey, eventKey, ...rest } = this.props
        return (
            <React.Fragment>
                <h4 eventkey={eventKey} {...rest}>{title}</h4>
                <Collapsible expand={activeKey == eventKey}>
                    {children}
                </Collapsible>
            </React.Fragment>
        )
    }
}