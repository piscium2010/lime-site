const md = `import React from 'react';
import FloatMenu from '../../components/FloatMenu'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css'

const Li = ({ title, to, children, ...rest }) => {
    return (
        to
            ? <Link to={to}><FloatMenu title={title} {...rest}>{children}</FloatMenu></Link>
            : <FloatMenu title={title} {...rest}>{children}</FloatMenu>
    )
}

export default class Menu extends React.Component {
    render() {
        return (
            <ul className='lime-raised' style={{ width: 280, padding: 0, width: '100%', display: 'flex' }}>
                <Li title={'Home'}></Li>
                <Li title={'Language'} ></Li>
                <Li title={'Components'} placement='down'>
                    <ul style={{ paddingLeft: 0 }}>
                        <Li title={'Button'}></Li>
                        <Li title={'Select'}></Li>
                        <Li title={'Menu'} placement='right'>
                            <ul style={{ paddingLeft: 0 }}>
                                <Li title={'Inline'}></Li>
                                <Li title={'Float'}></Li>
                            </ul>
                        </Li>
                    </ul>
                </Li>
                <Li title={'Docs'} ></Li>
                <Li title={'About us'} ></Li>
            </ul>
        )
    }
}`
export default md
