import React from 'react';
import List from '@piscium2010/lime/List'
import '@piscium2010/lime/lime.css'

const poetry = [
    <span style={{fontWeight:'bold'}}>The Road Not Taken</span>,
    `- by Robert Frost`,
    ``,
    `Two roads diverged in a yellow wood,`,
    `And sorry I could not travel both`,
    `And be one traveler, long I stood`,
    `And looked down one as far as I could`,
    `To where it bent in the undergrowth;`,
    ``,
    `Then took the other, as just as fair,`,
    `And having perhaps the better claim,`,
    `Because it was grassy and wanted wear;`,
    `Though as for that the passing there`,
    `Had worn them really about the same,`,
    ``,
    `And both that morning equally lay`,
    `In leaves no step had trodden black.`,
    `Oh, I kept the first for another day!`,
    `Yet knowing how way leads on to way,`,
    `I doubted if I should ever come back.`,
    ``,
    `I shall be telling this with a sigh`,
    `Somewhere ages and ages hence:`,
    `Two roads diverged in a wood, and I—`,
    `I took the one less traveled by,`,
    `And that has made all the difference.`,
]


const style = { // from https://leaverou.github.io/css3patterns/#lined-paper
    backgroundColor: 'white',
    backgroundImage: 'linear-gradient(90deg, transparent 20px, #abced4 20px, #abced4 21px, transparent 23px), linear-gradient(#eee .1em, transparent .1em)',
    backgroundSize: '100% 35px'
}

export default class Basic extends React.Component {

    renderItem = (item, index) => {
        return (
            <div style={{ height: '100%' }}>
                <p style={{ margin: '15px 0 0 30px' }}>{item.text}</p>
            </div>
        )
    }

    render() {
        return (
            <List
                style={style}
                pageSize={10}
                itemHeight={35}
                items={poetry.map((text, index) => ({ text, key: index }))}
                renderItem={this.renderItem}
            />
        )
    }
}