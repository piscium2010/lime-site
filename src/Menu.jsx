import React from 'react';
import List from './Lii'
import Scroll from 'lime/Scroll'
import { Link } from "react-router-dom";

const Li = ({ title, to, children, ...rest }) => {
    return (
        to ? <Link to={to}><List title={title} {...rest}>{children}</List></Link> : <List title={title} {...rest}>{children}</List>
    )
}

export default class Menu extends React.Component {
    render() {
        return (
            <div className='side-nav'>
                <Scroll style={{ height: '99vh' }}>
                    <ul>
                        <Li title={'Get Started'}></Li>
                        <Li title={'Button'} to='/button'></Li>
                        <Li title={'Card'} to='/card'></Li>
                        <Li title={'Collapsible'} defaultExpand>
                        </Li>
                        <Li title={'Accordian'} to='/accordion'></Li>
                        <Li title={'Layer'} to='/layer'></Li>
                        <Li title={'Loading'} to='/loading'></Li>
                        <Li title={'Menu'}>
                            <ul>
                                <Li title={'inline'} to='/menu/inline'></Li>
                                <Li title={'horizontal'}></Li>
                                <Li title={'vertical'}></Li>
                            </ul>
                        </Li>
                        <Li title={'Ripple'} to='/ripple'></Li>
                        <Li title={'Select'}>
                            <ul>
                                <Li title={'basic'} to='/select/basic'></Li>
                                <Li title={'divider'} to='/select/divider'></Li>
                                <Li title={'filter'} to='/select/filter'></Li>
                                <Li title={'multi'} to='/select/multi'></Li>
                                <Li title={'search'} to='/select/search'></Li>
                            </ul>
                        </Li>
                        <Li title={'Shimmer'} to='/shimmer'></Li>
                        <Li title={'Scroll'} to='/scroll'></Li>
                    </ul>
                </Scroll>
            </div>
        )
    }
}