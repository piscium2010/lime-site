import React from 'react';
import Scroll from '@piscium2010/lime/Scroll'

export default class Basic extends React.Component {
    render() {
        return (
            <div className="lime-card" style={{ display: 'inline-block' }}>
                <Scroll style={{ height: 300, maxWidth: 450 }}>
                    <div style={{ padding: '10px 30px', lineHeight:'1.6em' }}>
                        <h4 style={{textAlign:'center'}}>A letter from Steve Jobs to his wife</h4>
                        <p>
                            We didn't know much about each other twenty years ago. We were guided by our intuition, you swept off my feet.
                        </p>
                        <p>
                            It was snowing when we got married at the Ahwahnee. Years passed, kids came,good times, hard times, but never bad times. Our love and respect has endured and grown.
                        </p>
                        <p>
                            We've been through so much together and here we are right back where we started 20 years ago——older and wiser ——with wrinkles on our faces and hearts.
                        </p>
                        <p>
                            We now know many of life's joys, sufferings, secrets and wonders and we're still here together. My feet have never returned to the ground.
                        </p>
                    </div>
                </Scroll>
            </div>
        )
    }
}