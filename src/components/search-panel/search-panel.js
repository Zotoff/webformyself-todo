import React from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="d-flex search-panel">
            <input type="search" placeholder="search" />
            <ItemStatusFilter />
        </div>
        
    )
}

export default SearchPanel;