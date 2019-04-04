import React from 'react'
import Button from '../../components/Button'
import '@fortawesome/fontawesome-free/css/all.css'
import '@piscium2010/lime/lime.css'

const size = {
    small: { padding: 0, width: 35, height: 35, fontSize: 12 },
    normal: { padding: 0, width: 40, height: 40, fontSize: 13 },
    medium: { padding: 0, width: 45, height: 45, fontSize: 20 },
    large: { padding: 0, width: 50, height: 50, fontSize: 30 }
}

export default class IconButton extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', maxWidth: 600, alignItems: 'center' }}>
                <Button className='lime-button primary lime-raised lime-round' style={{ marginRight: 'auto', ...size.normal }}>
                    <i className="fas fa-plus"></i>
                </Button>
                <Button className='lime-button primary lime-raised lime-round' style={{ marginRight: 'auto', ...size.normal }}>
                    <i className="fas fa-bars"></i>
                </Button>
                <Button className='lime-button primary' style={{ marginRight: 'auto' }}>
                    <i style={{ marginRight: 6, fontSize: 12 }} className="fas fa-save"></i>
                    <span>Save</span>
                </Button>
                <Button className='lime-button warning' style={{ marginRight: 'auto' }}>
                    <i style={{ marginRight: 6, fontSize: 12 }} className="far fa-trash-alt"></i>
                    <span>Delete</span>
                </Button>
            </div>
        )
    }
}