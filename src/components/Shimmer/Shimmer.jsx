import React from 'react'
import 'lime/lime.css'

export default class Shimmer extends React.Component {
    static defaultProps = {
        show: true
    }

    render() {
        let { show } = this.props
        return (
            show &&
            <React.Fragment>
                <div style={{ width: 50, height: 50, borderRadius: '50%', margin: 3, overflow: 'hidden' }}>
                    <div className="lime-shimmer" style={{ height: '100%', width: '100vw' }}></div>
                </div>
                <div className="lime-shimmer" style={{ height: 15, margin: 3 }}></div>
                <div className="lime-shimmer" style={{ height: 15, margin: 3 }}></div>
                <div className="lime-shimmer" style={{ height: 15, margin: 3 }}></div>
            </React.Fragment>
        )
    }
}