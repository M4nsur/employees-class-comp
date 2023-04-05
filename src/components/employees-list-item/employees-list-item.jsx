import './employees-list-item.css';

const EmployeesListItem = (props) => {
        const {name, salary, onDelete, increase, fav, onHandle} = props;

        let increaseUpd = "list-group-item d-flex justify-content-between" 

        if(increase) {
            increaseUpd += " increase"
        }

        if(fav) {
            increaseUpd += " like"
        }
        return (
            <li className={increaseUpd}>
                <span
                onClick={onHandle}
                dataForHandle="fav"
                className="list-group-item-label like">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        dataForHandle="increase"
                        onClick={onHandle}
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

export default EmployeesListItem;