import React from 'react'
import Basic from '../examples/checkbox/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/checkbox/Basic.md.js'
import PageHeader from '../components/PageHeader'
import Checkbox from '@piscium2010/lime/Checkbox'
import Markdown from '../components/Markdown'

export default class CheckBoxPage extends React.Component {

    state = { marryme: false }

    onChange = ({ name, checked }) => {
        this.setState({
            marryme: checked
        })
    }

    render() {
        const { marryme } = this.state
        const desc = (
            <div>
                <p>Checkbos is a yes or no, agree or disagree, true of false, on or off question like</p>
                <p style={{ display: 'flex' }}>
                    <Checkbox name={'marry'} label='Would u marry me?' onChange={this.onChange} />
                    {marryme && <span>&nbsp;(*๓´╰╯`๓)♡ </span>}
                </p>
            </div>
        )

        return (
            <div>
                <PageHeader title='Checkbox' desc={desc} />
                <section>
                    <h2>Usage</h2>
                    <ExampleBlock md={exampleMD}>
                        <Basic />
                    </ExampleBlock>
                </section>
                <section>
                    <h2>Build it yourself</h2>
                </section>

            </div>
        )
    }
}