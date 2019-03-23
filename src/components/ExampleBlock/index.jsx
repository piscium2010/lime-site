import React from 'react'
import Collapsible from 'lime/Collapsible'
import Markdown from '../../components/Markdown'

// const expandIcon = 'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg'
const expandIcon = '/code-closed.svg'
// const closeIcon = 'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg'
const closeIcon = '/code-open.svg'

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
                        <div><Markdown html={md} /></div>
                    </Collapsible>
                    <div className='example-block-content'>
                        {this.props.children}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}