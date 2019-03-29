import React from 'react';
import Scroll from '@piscium2010/lime/Scroll'

export default class Basic extends React.Component {
    render() {
        return (
            <div className="lime-card" style={{ display: 'inline-block' }}>
                <Scroll style={{ height: 200 }}>
                    <div style={{ padding: '10px 30px' }}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </Scroll>
            </div>
        )
    }
}