import React from 'react'
import Markdown from '../../components/Markdown'

const expandIcon = 'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg'
const closeIcon = 'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg'

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
        let { md } = this.props
        let { expand } = this.state
        return (
            <div>
                <section className="example">
                    {this.props.children}
                    <div className='example-footer'>
                        <img 
                            alt="expand code" 
                            src={expand ? closeIcon : expandIcon} 
                            onClick={this.onClick}
                            onMouseOver={this.onMouseOver}
                        />
                    </div>
                </section>
                {
                    expand &&
                    <section>
                        <Markdown html={md} />
                    </section>
                }
            </div>
        )
    }
}