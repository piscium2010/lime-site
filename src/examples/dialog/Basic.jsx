import React from 'react';
import Dialog from '@piscium2010/lime/Dialog'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeId: 0
        }
    }

    open = id => {
        this.setState({ activeId: id })
    }

    close = () => {
        this.setState({ activeId: 0 })
    }

    render() {
        const { activeId } = this.state
        const Header = () => <h3 style={{ margin: '0 0 15px 0' }}>Header</h3>
        const Hr = () => <hr style={{ color: '#f2f2f2', margin: '0 -15px' }} />
        const Content = () => <p style={{ lineHeight: '1.2em', maxWidth: 400 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dipisicing elit. Corrupti, ab.</p>
        const Footer = (props) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}>{props.children}</div>
        const btnStyle = { flex: '0 0 80px' }
        return (
            <React.Fragment>
                <p>
                    <Dialog show={activeId === 1} onBlurDialog={this.close}>
                        <Header />
                        <Hr />
                        <Content />
                        <Footer>
                            <button style={btnStyle} className='lime-button primary' onClick={this.close}>OK</button>
                        </Footer>
                    </Dialog>
                    <button className='lime-button' onClick={() => this.open(1)}>Accept</button>
                </p>
                <p>
                    <Dialog show={activeId === 2}>
                        <Header />
                        <Hr />
                        <Content />
                        <Footer>
                            <button style={btnStyle} className='lime-button primary' onClick={this.close}>OK</button>
                        </Footer>
                    </Dialog>
                    <button className='lime-button' onClick={() => this.open(2)}>Modal</button>
                </p>
            </React.Fragment>
        )
    }
}