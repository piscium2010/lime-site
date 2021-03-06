import React from 'react'
import Collapsible from '@piscium2010/lime/Collapsible'
import Markdown from '../../components/Markdown'

export default class ExampleBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
    }

    onClick = evt => {
        this.setState(preState => ({
            expand: !preState.expand
        }))
    }

    render() {
        let { md, title = '' } = this.props
        let { expand } = this.state
        return (
            <React.Fragment>
                <h4>{title}</h4>
                <section className="example-block">
                    <div className='example-block-header'>
                        <i className="fas fa-code" onClick={this.onClick}></i>
                    </div>
                    <Collapsible expand={expand}>
                        <div><Markdown md={md} /></div>
                    </Collapsible>
                    <div className='example-block-content'>
                        {this.props.children}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}