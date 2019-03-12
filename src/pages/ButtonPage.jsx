import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'lime/Button'
import Ripple from 'lime/Ripple'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: 'Lorem ipsum dolor sit amet.' + i
    })
}

export default class ButtonPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log(`render`,)
        return (
           <div>
               <Button>Lime<Ripple></Ripple></Button>
               <Button type='text'>Lime
               </Button>
           </div>
           
        )
    }
}