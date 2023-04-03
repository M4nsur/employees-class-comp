import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            favorite: false
        }
    }

    handleIncrease = () => {
        this.setState(( { increase }) => ({
            increase: !increase
        }))
    }

    handleFavorite = () => {
        this.setState(( { favorite }) => ({
            favorite: !favorite
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, favorite} = this.state;

        let increaseUpd = "list-group-item d-flex justify-content-between" 

        if(increase) {
            increaseUpd += " increase"
        }

        if(favorite) {
            increaseUpd += " like"
        }
        return (
            <li className={increaseUpd}>
                <span
                onClick={this.handleFavorite}  
                className="list-group-item-label like">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.handleIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )        
    }
}

export default EmployeesListItem;