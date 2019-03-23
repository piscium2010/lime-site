import React from 'react'
import Accordion from '../../components/Accordion'

const titleStyle = { margin: 0, fontWeight: 400, cursor: 'pointer', padding: 15, background: '#fff' }
const contentStyle = { margin: '0 5px 5px', padding: '15px 10px' }
const Panel = ({ children, ...rest }) => (
    <Accordion.Panel
        className='lime-card'
        style={titleStyle}
        {...rest}
    >
        <p className='lime-card' style={contentStyle}>
            {children}
        </p>
    </Accordion.Panel>
)

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{ width: 300 }}>
                <Accordion defaultActiveKey='3'>
                    <Panel eventKey='1' title='Socrates'>
                        Born in Athens in 470 BC, is often credited as one of the founders of Western philosophy. The cloud of mystery surrounding his life and philosophical viewpoints propose a problem; a problem so large that it’s given a name itself: The Socratic Problem. Since he did not write philosophical texts, all knowledge related to him is entirely dependent on the writings of other people of the time period. Works by Plato, Xenophon, Aristotle, and Aristophanes contain all of the knowledge known about this enigmatic figure. His largest contribution to philosophy is the Socratic method. The Socratic method is defined as a form of inquiry and discussion between individuals, based on asking and answering questions to illuminate ideas. This method is performed by asking question after question with the purpose of seeking to expose contradictions in one’s thoughts, guiding him/her to arrive at a solid, tenable conclusion. The principle underlying the Socratic Method is that humans learn through the use of reasoning and logic; ultimately finding holes in their own theories and then patching them up.
                    </Panel>
                    <Panel eventKey='2' title='Plato'>
                        Student of Socrates, also has mystery surrounding him. His birth day is estimated to fall between 428 BC and 423 BC. He’s known for being the founder of the Academy in Athens, the first institution of higher learning in the Western world. My favorite of Plato’s contributions to philosophy, and the one I’m going to focus on, is the Theory of Forms. This theory was created to solve two problems, one of ethics and one of permanence and change. The ethical problem is: how can humans live a fulfilling life in an ever changing world if everything that they hold close to them can be easily taken away? The problem dealing with permanence and change is: How can the world appear to be both permanent and changing? The world we perceive through senses seems to be always changing–which is a pretty clear observation. The world that we perceive through the mind, seems to be permanent and unchanging. Which world perceived is more real? Why are we seen two different worlds?
                    </Panel>
                    <Panel eventKey='3' title='Third Title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elitko
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Panel>
                </Accordion>
            </div>
        )
    }
}