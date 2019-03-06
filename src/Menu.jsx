import React from 'react';
import Li from './Lii'
import Scroll from 'lime/Scroll'
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <Scroll style={{ height: '99vh', width: 300, float: 'left' }}>
                    <ul>
                        <Li title={'Get Started'}></Li>
                        <Link to="/button">
                            <Li title={'Button'}></Li>
                        </Link>
                        <Li title={'Collapsible'}></Li>
                        <Li title={'Layer'}></Li>
                        <Link to="/loading">
                            <Li title={'Loading'}></Li>
                        </Link>
                        <Li title={'Menu'}>
                            <ul>
                                <Li title={'inline'}></Li>
                                <Li title={'horizontal'}></Li>
                                <Li title={'vertical'}></Li>
                            </ul>
                        </Li>
                        <Li title={'Ripple'}></Li>
                        <Li title={'Select'}>
                            <ul>
                                <Li title={'basic'}></Li>
                                <Li title={'divider'}></Li>
                                <Li title={'filter'}></Li>
                                <Link to='/multiselect'>
                                    <Li title={'multi'}></Li>
                                </Link>
                                <Link to='/search'>
                                    <Li title={'search'}></Li>
                                </Link>
                            </ul>
                        </Li>
                        <Li title={'Shimmer'}></Li>
                        <Li title={'Scroll'}></Li>
                    </ul>
                </Scroll>
            </div>
        )
    }
}