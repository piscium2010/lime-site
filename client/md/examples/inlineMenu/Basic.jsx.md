```javascript
import React from 'react';
import List from '../../components/InlineMenu'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css'

const Li = ({ title, to, children, ...rest }) => {
    return (
        to
        ? <Link to={to}><List title={title} {...rest}>{children}</List></Link>
        : <List title={title} {...rest}>{children}</List>
    )
}

export default class Menu extends React.Component {
    render() {
        return (
            <ul className='lime-card' style={{width: 280, padding: 0}}>
                <Li title={'Get Started'}></Li>
                <Li title={'Button'} ></Li>
                <Li title={'Card'} ></Li>
                <Li title={'Collapsible'} ></Li>
                <Li title={'Accordian'} ></Li>
                <Li title={'Layer'} ></Li>
                <Li title={'Loading'} ></Li>
                <Li title={'Menu'} defaultExpand>
                    <ul style={{padding:0}}>
                        <Li style={{paddingLeft: 40}} title={'Inline'}></Li>
                        <Li style={{paddingLeft: 40}} title={'Float'}></Li>
                    </ul>
                </Li>
                <Li title={'Ripple'} ></Li>
                <Li title={'Select'} ></Li>
                <Li title={'Shimmer'} ></Li>
                <Li title={'Scroll'} ></Li>
            </ul>
        )
    }
}
```