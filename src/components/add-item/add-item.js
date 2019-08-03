import React, {Component} from 'react';

class AddItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (el) => {
        this.setState(
            {label: el.target.value}
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }
    
    render(){
        return (
            <div className="d-flex">
                <form onSubmit = {this.onSubmit}>
                    <input type="text" placeholder="Enter the value" onChange={this.onLabelChange} value={this.state.label}/>
                    <button className="btn btn-success">Add item</button>
                </form>
                    
            </div>
        )
    }
}

export default AddItem;