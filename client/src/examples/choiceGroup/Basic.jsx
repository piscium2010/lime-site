import React from 'react';
import ChoiceGroup from '../../components/ChoiceGroup'
import '@piscium2010/lime/lime.css'

export default class Basic extends React.Component {
    onChange = ({value}) => {
    }

    render() {
        return (
            <div>
                <h5>H</h5>
                <section>
                    <ChoiceGroup name='gender' defaultValue='2' onChange={this.onChange}>
                        <ChoiceGroup.Option value='1'>
                            Male
                        </ChoiceGroup.Option>
                        <ChoiceGroup.Option value='2'>
                            Female
                        </ChoiceGroup.Option>
                    </ChoiceGroup>
                </section>
                <p style={{fontSize:'smaller'}}>
                    *The first time i know that facebook have 51 gender options. It touch my soul and make wonder what a great company it is.
                </p>
                <h5>V</h5>
                <section>
                    <ChoiceGroup name='marriage' style={{ display: 'inline-flex', flexDirection: 'column' }} >
                        <ChoiceGroup.Option value='3'> 
                            Single
                        </ChoiceGroup.Option>
                        <ChoiceGroup.Option value='4'>
                            Married <span style={{color:'#cdcdcd'}}>but available</span>
                        </ChoiceGroup.Option>
                    </ChoiceGroup>
                </section>
            </div>
        )
    }
}