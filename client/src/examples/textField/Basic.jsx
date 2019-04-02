import React from 'react';
import TextField from '../../components/TextField'
import '@fortawesome/fontawesome-free/css/all.css'

const iconStyle = { lineHeight: '30px', padding: '0 10px', color: '#cdcdcd' }

export default class Basic extends React.Component {
    render() {
        const user = <i style={iconStyle} className="fas fa-user"></i>
        const password = <i style={iconStyle} className="fas fa-lock"></i>
        const mobile = <i style={iconStyle} className="fas fa-phone-square"></i>
        return (
            <div>
                <p>
                    <TextField placeholder='username' icon={user} />
                </p>
                <p>
                    <TextField placeholder='password' icon={password} />
                </p>
                <p>
                    <TextField placeholder='phone' icon={mobile} />
                </p>
            </div>
        )
    }
}