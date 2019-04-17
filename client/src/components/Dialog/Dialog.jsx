import React from 'react'
import classnames from 'classnames'
import '@piscium2010/lime/lime.css'

export default class Dialog extends React.PureComponent {
    static defaultProps = {
        show: false,
        onBlurDialog: () => { }
    }

    constructor(props) {
        super(props)
        this.contentRef = React.createRef()
    }

    get contentNode() {
        return this.contentRef.current
    }

    onBlur = evt => {
        if (this.contentNode && !this.contentNode.contains(evt.target)) {
            this.props.onBlurDialog()
        }
    }

    render() {
        const { className, children, show, onBlurDialog, ...rest } = this.props
        const classes = classnames(`lime-dialog`, className)

        return show ?
            <div className={`lime-dialog-mask`} onClick={this.onBlur}>
                <div ref={this.contentRef} className={classes} {...rest}>
                    {children}
                </div>
            </div>
            :
            null
    }
}
