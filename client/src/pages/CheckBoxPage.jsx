import React from 'react'
import Basic from '../examples/checkbox/Basic'
import ExampleBlock from '../components/ExampleBlock'
import exampleMD from '../../md/examples/checkbox/Basic.md.js'
import PageHeader from '../components/PageHeader'
import Checkbox from '../components/Checkbox'
import checkboxMD from '../../md/components/Checkbox/Checkbox.md.js'
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
                <p>Checkbox is a yes or no, agree or disagree, true of false, on or off question like</p>
                <div style={{ display: 'flex' }}>
                    <Checkbox name={'marry'} label='Will u marry me?' onChange={this.onChange} />
                    {marryme && <span>&nbsp;(*๓´╰╯`๓)♡ </span>}
                </div>
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
                    <div className='implement'>
                        <h4>Checkbox.jsx</h4>
                        <Markdown md={checkboxMD} />
                    </div>
                </section>

            </div>
        )
    }
}