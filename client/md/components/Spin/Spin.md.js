const md = `import React from 'react'
import '@piscium2010/lime/lime.css'

export default class Loading extends React.Component {
    static defaultProps = {
        text: '',
        size: 30,
        show: false,
        threshold: 1000
    }

    constructor(props) {
        super(props)
        this.state = { show: props.show }
    }

    componentDidUpdate() {
        const { show, threshold } = this.props
        const sync = show === this.state.show
        window.clearTimeout(this.timer)

        if (!sync) {
            this.timer = setTimeout(() => {
                this.setState({ show })
            }, show === true ? threshold : 0)
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.timer)
    }

    render() {
        const { text, size } = this.props
        const { show } = this.state
        return (
            show ?
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <div>
                        <div className="lime-spin" style={{ width: size, height: size, margin: 'auto' }}></div>
                        {text && <div style={{ textAlign: 'center' }}>{text}</div>}
                    </div>
                </div>
                : null
        )
    }
}`
export default md
