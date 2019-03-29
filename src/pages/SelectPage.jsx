import React from 'react'
import Basic from '../examples/select/Basic'
import basicMD from '../../md/examples/select/Basic.jsx.md'
import DisableOption from '../examples/select/DisableOption'
import disableOptionMD from '../../md/examples/select/DisableOption.jsx.md'
import ExampleBlock from '../components/ExampleBlock'
import FilterOption from '../examples/select/FilterOption'
import filterOptionMD from '../../md/examples/select/FilterOption.jsx.md'
import Loading from '../examples/select/Loading'
import loadingMD from '../../md/examples/select/Loading.jsx.md'
import MultiSelect from '../examples/select/MultiSelect'
import multiSelectMD from '../../md/examples/select/MultiSelect.jsx.md'
import OptionGroup from '../examples/select/OptionGroup'
import optionGroupMD from '../../md/examples/select/OptionGroup.jsx.md'
import SearchOption from '../examples/select/SearchOption'
import searchOptionMD from '../../md/examples/select/SearchOption.jsx.md'
import selectMD from '../../md/components/Select/Select.jsx.md'
import Markdown from '../components/Markdown'

export default class BasicPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Select</h2>
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
                <h2>Build it yourself</h2>
                <section className='implement'>
                    <h4>Select.jsx</h4>
                    <Markdown html={selectMD} />
                </section>
            </div>
        )
    }
}