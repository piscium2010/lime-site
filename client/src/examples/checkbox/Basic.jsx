import React from 'react';
import Checkbox from '../../components/Checkbox'
import '@piscium2010/lime/lime.css'

const size = {
    small: { width: 16, height: 16 },
    medium: { width: 18, height: 18 },
    large: { width: 21, height: 21 }
}

const books = [
    'The Black Swan',
    'The Gene: An intimate History',
    'The Long Goodbye',
    'The Non-Designers’ Design Book',
    'The Three-body Problem',
    'Black Flags: The Rise of ISIS',
    'Fall of Giants',
    'Winter of the World',
    'Edge of Eternity',
    'Guns, Germs, and Steel: The Fates of Human Societies'
]

const comments = [
    'Please check on if u read any above ',
    'This is a great book!',
    'Right, they r both good',
    'Feels good to know that u love these book',
    'Love reading, huh?',
    'Wow, u reading a lot',
    'Kidding me, u read this much?',
    'Reading this much, u r very special.',
    'I haven\'t read them all, but i will',
    'U have an enriched soul. Would u like have a date with me?',
    'Read them all? God damn it, u are awesome!'
]

export default class Basic extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: new Array(books.length)}
    }

    onChange = ({ name, checked }) => {
        const list = Array.from(this.state.list)
        list[name / 1] = checked
        this.setState({
            list
         })
    }

    render() {
        const style ={lineHeight: '30px'}
        const commentIndex = this.state.list.filter(read => read == true).length
        let i = 0
        return (
            <div>
                <h3>Must Read Book List</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Checkbox boxStyle={{ ...size.medium }} name={'0'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'1'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'2'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'3'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'4'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'5'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'6'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'7'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'8'} label={books[i++]} onChange={this.onChange} style={style} />
                    <Checkbox boxStyle={{ ...size.medium }} name={'9'} label={books[i++]} onChange={this.onChange} style={style} />
                </div>
                <div>
                    <p>{comments[commentIndex]}</p>
                </div>
            </div>
        )
    }
}