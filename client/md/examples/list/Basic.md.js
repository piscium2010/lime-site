const md = `import React from 'react';
import List from '@piscium2010/lime/List'
import '@piscium2010/lime/lime.css'

const lyrics = [
    \`Come down to the Black Sea swimming with me\`,
    \`ah-oh\`,
    \`Go down with me\`,
    \`fall with me\`,
    \`lets make worth it\`,
    \`ah-oh\`,
    \`A thousand nights have passed\`,
    \`change doesen't happen overnight\`,
    \`Not visible at first\`,
    \`It's important to hold on\`,
    \`Oh, oh, oh, oh\`,
    \`inject your advice to me\`,
    \`Oh, oh, oh, oh\`,
    \`incinerate our shackles\`,
    \`Come down to the Black Sea swimming with me\`,
    \`ah-oh\`,
    \`Go down with me\`,
    \`fall with me\`,
    \`lets make worth it\`,
    \`ah-oh\`,
    \`You rise, I fall,\`,
    \`I stand, you crawl\`,
    \`You twist, I turn,\`,
    \`who's the first to burn\`,
    \`You sit and stay,\`,
    \`I don't to obey\`,
    \`Where do we land in the Black Sea\`,
    \`Oh, oh, oh, oh in the Black Sea\`,
    \`Where do we land in the Black Sea\`,
    \`You're giving up, I'm tired\`,
    \`The tug of War that we're playing\`,
    \`I'm not giving up in truing to tell you\`,
    \`Oh, oh, oh, oh inject your advice to me\`,
    \`Oh, oh, oh, oh incinerate our shackles\`,
    \`Come down to the Black Sea swimming with me ah-oh\`,
    \`Go down with me fall with me lets make worth it ah-oh\`,
    \`You rise, I fall, I stand, you crawl\`,
    \`You twist, I turn, who's the first to burn\`,
    \`You sit and stay, I don't to obey\`,
    \`Where do we land in the Black Sea\`,
    \`Oh, oh, oh, oh in the Black Sea\`,
    \`Where do we land in the Black Sea\`,
    \`Grip your hands tired of what's your worth\`,
    \`Watch yourself beg hanging on to Earth\`,
    \`Love, War, Pain, Life everything's the same to me\`,
    \`So come down to the Black Sea swimming with me ah-oh\`,
    \`Go down with me fall with me lets make worth it ah-oh\`,
    \`Come down to the Black Sea swimming with me ah-oh\`,
    \`Go down with me fall with me lets make worth it ah-oh\`,
    \`You rise, I fall, I stand, you crawl\`,
    \`You twist, I turn, who's the first to burn\`,
    \`You sit and stay, I don't to obey\`,
    \`Where do we land in the Black Sea\`,
    \`Oh, oh, oh, oh in the Black Sea\`,
    \`Where do we land in the Black Sea\`
]

export default class Basic extends React.Component {

    renderItem = (lyric, index) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
                <p style={{ padding: 5, margin: 0, color:'white' }}>{\`\${index}\`.padEnd(2)}. {lyric}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <List
                    style={{backgroundColor:'rgba(0,0,0,.7)'}}
                    pageSize={10}
                    itemHeight={40}
                    items={lyrics}
                    renderItem={this.renderItem}
                />
            </div>
        )
    }
}`
export default md
