import React from 'react'
import './node_modules/@piscium2010/lime/lime.css'

export default class Table extends React.Component {
    render() {
        return (
            <table class="lime-table light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col" colSpan="2">Desc</th>
                        <th scope="col">Type</th>
                        <th scope="col">Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td colSpan="2">Otto</td>
                        <td>@mdo</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td colSpan="2">Thornton</td>
                        <td>@fat</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td colSpan="2">the Bird</td>
                        <td>@twitter</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}