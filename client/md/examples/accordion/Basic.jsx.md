```javascript
import React from 'react'
import Accordion from '../../components/Accordion'

const titleStyle = { margin: 0, cursor: 'pointer', padding: 15, background: '#fff' }
const contentStyle = { margin: '0 5px', padding: 15, lineHeight:'1.2em', background:'rgb(250,237,208)' }
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
            <div style={{}}>
                <Accordion defaultActiveKey='3'>
                    <Panel eventKey='1' title='Socrates'>
                        Born in Athens in 470 BC, is often credited as one of the founders of Western philosophy. The cloud of mystery surrounding his life and philosophical viewpoints propose a problem; a problem so large that it’s given a name itself: The Socratic Problem. Since he did not write philosophical texts, all knowledge related to him is entirely dependent on the writings of other people of the time period. Works by Plato, Xenophon, Aristotle, and Aristophanes contain all of the knowledge known about this enigmatic figure.
                    </Panel>
                    <Panel eventKey='2' title='Plato'>
                        Student of Socrates, also has mystery surrounding him. His birth day is estimated to fall between 428 BC and 423 BC. He’s known for being the founder of the Academy in Athens, the first institution of higher learning in the Western world. My favorite of Plato’s contributions to philosophy, and the one I’m going to focus on, is the Theory of Forms. This theory was created to solve two problems, one of ethics and one of permanence and change.
                    </Panel>
                    <Panel eventKey='3' title='Aristotle'>
                        Student of Plato, lived from 384 BC-322 BC. At eighteen, he joined Plato’s Academy in Athens and remained there until the age of thirty-seven. There, he honed his talents of understanding the world. In his understanding of the world, he wrote his theory of the universals–which I find to be extremely intriguing. The problem of the universals is the question of whether properties exist, and if so, what exactly are they. To avoid confusion, a universal is a metaphysical term describing what particular things have in common, focusing strictly characteristics or qualities.
                    </Panel>
                </Accordion>
            </div>
        )
    }
}
```