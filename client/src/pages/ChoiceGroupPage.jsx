import React from 'react'
import Basic from '../examples/choiceGroup/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/choiceGroup/Basic.md.js'
import choiceGroupMD from '../../md/components/ChoiceGroup/ChoiceGroup.md.js'
import choiceOptionMD from '../../md/components/ChoiceGroup/Option.md.js'
import PageHeader from '../components/PageHeader'
import Markdown from '../components/Markdown'

export default class ChoicGroupPage extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title='Choice Group' desc={'U can\'t have them all, pick up the one most fit u'} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={exampleMD}>
                        <Basic />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section>
                    <div className='implement'>
                        <h4>ChoiceOption.jsx</h4>
                        <Markdown md={choiceOptionMD} />
                    </div>
                    <div className='implement'>
                        <h4>ChoiceGroup.jsx</h4>
                        <Markdown md={choiceGroupMD} />
                    </div>
                </section>
            </div>
        )
    }
}