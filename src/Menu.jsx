import React from 'react';
import Li from './Lii'
import Scroll from 'lime/Scroll'

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <Scroll style={{ height: '99vh', width:300 }}>
                    <ul>
                        <Li title={'Get Started'}></Li>
                        <Li title={'Button'}></Li>
                        <Li title={'Collapsible'}></Li>
                        <Li title={'Layer'}></Li>
                        <Li title={'Loading'}></Li>
                        <Li title={'Menu'}>
                            <ul>
                                <Li title={'inline'}></Li>
                                <Li title={'horizontal'}></Li>
                                <Li title={'vertical'}></Li>
                            </ul>
                        </Li>
                        <Li title={'Select'}>
                            <ul>
                                <Li title={'Coffee II'}></Li>
                                <Li title={'Tea II'}></Li>
                                <Li title={'Team II'}>
                                    <ul>
                                        <Li title={'Coffee III'}></Li>
                                        <Li title={'Tea III'}></Li>
                                    </ul>
                                </Li>
                            </ul>
                        </Li>
                        <Li title={'Scroll'}></Li>
                    </ul>
                </Scroll>
            </div>
        )
    }
}