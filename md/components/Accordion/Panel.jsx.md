```javascript
import React from 'react'
import Collapsible from 'lime/Collapsible'

export default class Panel extends React.Component {
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
```