import React, {Component} from 'react';
import './item-status-filter.css';

class ItemStatusFilter extends Component {
    render(){
        const {filterDone, filterAll} = this.props;
        return (
            <div className = 'btn-group'>
                <button type='button' className = 'btn btn-info' onClick={filterAll}>All</button>
                <button type='button' className = 'btn btn-outline-secondary'>Active</button>
                <button type='button' className = 'btn btn-outline-secondary' onClick={filterDone}>Done</button>
            </div>
        )
    }
}
export default ItemStatusFilter;