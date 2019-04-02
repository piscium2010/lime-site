import React from 'react'

export default class Loading extends React.Component {
    static defaultProps = {
        text: '',
        size: 30
    }

    render() {
        let { text, size } = this.props
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100%', height:'100%' }}>
                <div>
                    <div className="lime-spin" style={{ width: size, height: size, margin: 'auto' }}></div>
                    {text && <div style={{ textAlign: 'center' }}>{text}</div>}
                </div>
            </div>
        )
    }
}