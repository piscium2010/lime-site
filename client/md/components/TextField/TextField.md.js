const md = `import React from 'react'

export default class TextField extends React.Component {
    render() {
        const { children, className = '', icon, ...rest } = this.props

        return (
            <div className={\`lime-textField-input \${className}\`} >
                {icon}
                <input type="text" {...rest} />
            </div>
        )
    }
}`
export default md
