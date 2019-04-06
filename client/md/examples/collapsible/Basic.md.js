const md = `import React from 'react';
import Collapsible from '@piscium2010/lime/Collapsible'
import '@piscium2010/lime/lime.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
    }

    onClick = evt => {
        this.setState(prevState => ({ expand: !prevState.expand }))
    }

    render() {
        return (
            <div>
                <Collapsible expand={this.state.expand}>
                    <div style={{ height: 35, background: '#a0d911', padding: 10 }}>
                        <div style={{ lineHeight: '35px', color: 'white' }}>
                            Translate this paragraph?&nbsp;
                            <button className='lime-button text' onClick={this.onClick} style={{ marginLeft: 'auto' }}>No, I'm good</button>
                        </div>
                    </div>
                </Collapsible>
                <p style={{ background: 'rgb(250, 237, 208)', padding: '10px 10px 30px 10px', marginTop: 0 }}>
                    诗经·蒹葭 <br />
                    蒹葭苍苍，白露为霜。所谓伊人，在水一方。<br />
                    溯洄从之，道阻且长。溯游从之，宛在水中央。<br />
                    蒹葭萋萋，白露未晞。所谓伊人，在水之湄。<br />
                    溯洄从之，道阻且跻。溯游从之，宛在水中坻。<br />
                    蒹葭采采，白露未已。所谓伊人，在水之涘。<br />
                    溯洄从之，道阻且右。溯游从之，宛在水中沚。<br />
                </p>
                <button className='lime-button primary' onClick={this.onClick} style={{ marginLeft: 'auto' }}>Translate</button>
            </div>
        )
    }
}`
export default md
