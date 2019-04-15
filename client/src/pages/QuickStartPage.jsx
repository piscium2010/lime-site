import React from 'react';
import copyToClipBoard from '../../util/copyToClipBoard'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import MessageBox from '../components/MessageBox'

const preStyle = {
    background: 'black',
    color: 'white',
    whiteSpace: 'pre',
    padding: 15,
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    lineHeight: 1.4,
    fontSize: 14,
    borderRadius: 2
}

const codeStyle = {
    whiteSpace: 'pre'
}

const cmdStyle = {
    color: 'rgb(194,118,40)'
}

const gitUrl = 'https://github.com/piscium2010/hello-lime.git'

export default class QuickStartPage extends React.Component {
    onClick = evt => {
        copyToClipBoard(`git clone ${gitUrl}`)
        MessageBox.show('Code Copied')
    }

    render() {
        return (
            <div>
                <PageHeader title='Quick Start' desc={`A boilterplate is available at github. Just clone and start your lime journey in minutes.`} />
                <h2>Clone</h2>
                <section style={{ position: 'relative' }}>
                    <pre style={preStyle}>
                        <code style={codeStyle}>
                            <div><span style={cmdStyle}>git</span> clone {gitUrl}</div>
                        </code>
                    </pre>
                    <div className='copy'>
                        <Button className='lime-button primary' onClick={this.onClick}>Copy</Button>
                    </div>
                </section>
                <h2>Hello Lime</h2>
                <section>
                    <pre style={preStyle}>
                        <code style={codeStyle}>
                            <div><span style={cmdStyle}>cd</span> hello-lime</div>
                            <div><span style={cmdStyle}>npm</span> i</div>
                            <div><span style={cmdStyle}>npm</span> start</div>
                        </code>
                    </pre>
                </section>
            </div>
        )
    }
}