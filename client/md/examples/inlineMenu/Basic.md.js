const md = `import React from 'react';
import InlineMenu from '../../components/InlineMenu'
import '@fortawesome/fontawesome-free/css/all.css'

const Li = ({ title, children, k, activeK, onClick, ...rest }) => {
    const active = k == activeK
    const className = active ? 'lime-active-text lime-ribbon-right' : ''
    return (
        <InlineMenu {...rest} title={title} className={className} onClick={() => onClick(k)}>
            {children}
        </InlineMenu>
    )
}

export default class Menu extends React.Component {
    state = { activeK: -1 }

    onClick = k => {
        this.setState({ activeK: k })
    }

    render() {
        const { activeK } = this.state
        let k = 0
        return (
            <ul className='lime-card' style={{ width: 280, padding: 0 }}>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Get Started'}></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Button'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Card'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Collapsible'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Accordian'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Layer'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Loading'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Menu'} defaultExpand>
                    <ul style={{ padding: 0 }}>
                        <Li style={{ paddingLeft: 40 }} k={k++} onClick={this.onClick} activeK={activeK} title={'Inline'}></Li>
                        <Li style={{ paddingLeft: 40 }} k={k++} onClick={this.onClick} activeK={activeK} title={'Float'}></Li>
                    </ul>
                </Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Ripple'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Select'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Shimmer'} ></Li>
                <Li k={k++} onClick={this.onClick} activeK={activeK} title={'Scroll'} ></Li>
            </ul>
        )
    }
}`
export default md
