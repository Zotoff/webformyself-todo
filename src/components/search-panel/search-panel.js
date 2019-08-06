import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './search-panel.css';

class SearchPanel extends Component {

    state = {
        term: ''
    }
    
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render(){
        return (
            <div className="d-flex search-panel">
                <input type="search" placeholder="search" value={this.state.term} onChange={this.onSearchChange}/>
                <ItemStatusFilter/>
            </div>
        )
    }
}

export default SearchPanel;