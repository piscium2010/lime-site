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

    onMouseOver = evt => {
        this.setState({
            expand: true
        })
    }

    render() {
        let { md, title = '' } = this.props
        let { expand } = this.state
        return (
            <section className="example-block">
                <div className='example-block-header'>
                    <h4 style={{ marginRight: 'auto' }}>{title}</h4>
                    <img
                        alt="expand code"
                           src={expand ? closeIcon : expandIcon}
                        onClick={this.onClick}
                        // onMouseOver={this.onMouseOver}
                    />
                </div>
                <Collapsible expand={expand}>
                    <div><Markdown html={md} /></div>
                </Collapsible>
                <div style={{ marginTop: 15 }}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}