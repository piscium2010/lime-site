import React from 'react'
import Basic from '../examples/select/Basic'
import basicMD from '../../md/examples/select/Basic.md.js'
import DisableOption from '../examples/select/DisableOption'
import disableOptionMD from '../../md/examples/select/DisableOption.md.js'
import ExampleBlock from '../components/ExampleBlock'
import FilterOption from '../examples/select/FilterOption'
import filterOptionMD from '../../md/examples/select/FilterOption.md.js'
import Loading from '../examples/select/Loading'
import loadingMD from '../../md/examples/select/Loading.md.js'
import MultiSelect from '../examples/select/MultiSelect'
import multiSelectMD from '../../md/examples/select/MultiSelect.md.js'
import OptionGroup from '../examples/select/OptionGroup'
import optionGroupMD from '../../md/examples/select/OptionGroup.md.js'
import SearchOption from '../examples/select/SearchOption'
import searchOptionMD from '../../md/examples/select/SearchOption.md.js'
import selectMD from '../../md/components/Select/Select.md.js'
import Markdown from '../components/Markdown'
import PageHeader from '../components/PageHeader'

export default class BasicPage extends React.Component {
    render() {
        const desc = <span>Select one from the plenty available options. </span>
        return (
            <div>
                <PageHeader title='Select' desc={desc} />
                <h2>Usage</h2>
                <section>
                    <ExampleBlock md={basicMD} title='Basic'>
                        <Basic />
                    </ExampleBlock>
                    <ExampleBlock md={loadingMD} title='Loading'>
                        <Loading />
                    </ExampleBlock>
                    <ExampleBlock md={disableOptionMD} title='Disable Option'>
                        <DisableOption />
                    </ExampleBlock>
                    <ExampleBlock md={optionGroupMD} title='Option Group'>
                        <OptionGroup />
                    </ExampleBlock>
                    <ExampleBlock md={searchOptionMD} title='Search Option'>
                        <SearchOption />
                    </ExampleBlock>
                    <ExampleBlock md={filterOptionMD} title='Filter'>
                        <FilterOption />
                    </ExampleBlock>
                    <ExampleBlock md={multiSelectMD} title='Multi Select'>
                        <MultiSelect />
                    </ExampleBlock>
                </section>
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Select.jsx</h4>
                    <Markdown md={selectMD} />
                </section>
            </div>
        )
    }
}