import React from 'react'
import '@piscium2010/lime/lime.css'

export default class PropsTable extends React.Component {
    render() {
        const { data } = this.props
        const sortByName = (a, b) => a.name > b.name ? 1 : -1
        return (
            <table className="lime-table light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col" colSpan="2">Desc</th>
                        <th scope="col">Type</th>
                        <th scope="col">Default</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.sort(sortByName).map(({ name, desc, type, deft = '' }, i) => (
                            <tr key={i}>
                                <td>{name}</td>
                                <td colSpan="2">{desc}</td>
                                <td>{type}</td>
                                <td>{deft}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}