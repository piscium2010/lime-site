import React from 'react'
import Accordion from '../../components/Accordion'

const titleStyle = { margin: 0, cursor: 'pointer', padding: 15, background: 'white' }

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ width: 300, margin: 'auto' }}>
                <Accordion defaultActiveKey='2'>
                    <Accordion.Panel className='sd-card' style={titleStyle} eventKey='1' title='First Title'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                        </p>
                    </Accordion.Panel>
                    <Accordion.Panel className='sd-card' style={titleStyle} eventKey='2' title='Second Title'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                        </p>
                    </Accordion.Panel>
                    <Accordion.Panel className='sd-card' style={titleStyle} eventKey='3' title='Third Title'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                        </p>
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}