import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './search-panel.css';

class SearchPanel extends Component {

    state = {
        term: '',
        filter: ''
    }
    
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render(){
        const {filter} = this.props;
        return (
            <div className="d-flex search-panel">
                <input type="search" placeholder="search" value={this.state.term} onChange={this.onSearchChange}/>
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
            </div>
        )
    }
}

export default SearchPanel;