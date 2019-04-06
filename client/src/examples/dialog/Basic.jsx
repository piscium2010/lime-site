import React from 'react';
import Dialog from '@piscium2010/lime/Dialog'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    state = { activeId: 0 }

    open = id => { this.setState({ activeId: id }) }

    close = () => { this.setState({ activeId: 0 }) }

    render() {
        const { activeId } = this.state
        return (
            <React.Fragment>
                <p>
                    <button className='lime-button' onClick={() => this.open(1)}>Play</button>
                </p>
                <p>
                    <button className='lime-button' onClick={() => this.open(2)}>Modal</button>
                </p>
                <Dialog show={activeId === 1} >
                    <h3 style={{ color: '#E10050' }}>FBI WARNING</h3>
                    <p style={{ lineHeight: '1.2em', maxWidth: 600 }}>
                        Federal law provides severe civil and criminal penalties for the unauthorized reproduction, distribution or exhibition of copyrighted motion pictures. video tapes and video discs.(title 17 u. s. code, section 501 and 506)
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{ flex: '0 0 80px' }} className='lime-button primary' onClick={this.close}>OK</button>
                    </div>
                </Dialog>
                <Dialog show={activeId === 2} onBlurDialog={this.close}>
                    <h3>Agreement</h3>
                    <p style={{ lineHeight: '1.2em', maxWidth: 600 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut nesciunt blanditiis, voluptatem temporibus consectetur molestias exercitationem ut odit soluta.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{ flex: '0 0 80px' }} className='lime-button primary' onClick={this.close}>OK</button>
                    </div>
                </Dialog>
            </React.Fragment>
        )
    }
}