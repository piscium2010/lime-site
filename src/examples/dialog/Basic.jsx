import React from 'react';
import Dialog from 'lime/Dialog'
import 'lime/lime.css'

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
        const Header = () => <h3>Header</h3>
        const Content = () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ab.</p>
        const Footer = (props) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}>{props.children}</div>
        const btnStyle = { flex: '0 0 80px' }
        return (
            <React.Fragment>
                <p>
                    <Dialog show={activeId === 1} onBlurDialog={this.close}>
                        <Header />
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