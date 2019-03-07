import React from 'react'
import Collapsible from 'lime/Collapsible'
import Accordian from '../../components/Accordion'

export default class AccordiontPage extends React.Component {
    render() {
        let style = { margin: 0, cursor: 'pointer' }
        let Panel = Accordian.Panel
        return (
            <Accordian defaultActiveKey='2'>
                <Panel style={style} eventKey='1' title='How are you'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                    </p>
                </Panel>
                <Panel style={style} eventKey='2' title='How are you'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                    </p>
                </Panel>
                <Panel style={style} eventKey='3' title='How are you'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.
                    </p>
                </Panel>
            </Accordian>
        )
    }
}