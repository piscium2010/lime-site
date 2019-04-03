const md = `import React from 'react';
import List from '@piscium2010/lime/List'
import '@piscium2010/lime/lime.css'

const items = []

for (let i = 0; i < 1000; i++) {
    items.push({
        key: i,
        value: i + '. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, perferendis.'
    })
}

export default class Thousands extends React.Component {

    renderItem = (item, index) => {
        return (
            <div style={{ display:'flex', justifyContent:'flex-start', alignItems:'center', height: '100%', background: index % 2 == 0 ? '#cdcdcd' : '#fff' }}>
                <p style={{ padding: 5, margin: 0 }}>{item.value}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <List
                    pageSize={10}
                    itemHeight={40}
                    items={items}
                    renderItem={this.renderItem}
                />
            </div>
        )
    }
}`
export default md
