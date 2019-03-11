import React from 'react'
import Accordion from '../../components/Accordion'

const titleStyle = { margin: 0, fontWeight: 400, cursor: 'pointer', padding: 15, background: '#fff' }
const contentStyle = { margin: '0 5px 5px', padding: '15px 10px' }
const Panel = ({ children, ...rest }) => (
    <Accordion.Panel
        className='sd-card'
        style={titleStyle}
        {...rest}
    >
        <p className='sd-card' style={contentStyle}>
            {children}
        </p>
    </Accordion.Panel>
)

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ width: 300 }}>
                <Accordion defaultActiveKey='3'>
                    <Panel eventKey='1' title='First Title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Panel>
                    <Panel eventKey='2' title='Second Title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Panel>
                    <Panel eventKey='3' title='Third Title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Panel>
                </Accordion>
            </div>
        )
    }
}