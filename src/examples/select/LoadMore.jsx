import React from 'react';
import Select from '../../components/Select'
import debounce from 'debounce'
import 'lime/lime.css'

const options = []
for (let i = 0; i < 20; i++) {
    options.push({
        key: i,
        text: 'Lorem ipsum dolor sit amet.' + i
    })
}

export default class LoadMore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options,
            loading: false
        }
        this.debouncedHandleSelectChange = debounce(this.handleSelectChange, 300)
    }

    handleSelectChange = evt => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                options,
                loading: false
            })
        }, 1000);
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 500 }}>
                <Select
                    name='user'
                    loading={this.state.loading}
                    options={this.state.options}
                    onChange={this.debouncedHandleSelectChange}
                    onLoadMore={ops => {

                        this.setState({
                            loading: true
                        })

                        setTimeout(() => {
                            this.setState({
                                options: ops.concat(options),
                                loading: false
                            })
                        }, 2000)
                    }}
                />
            </div>
        )
    }
}