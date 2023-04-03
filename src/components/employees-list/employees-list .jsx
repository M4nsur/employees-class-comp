import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({date, onDelete, onAdd}) => {
    const items = date.map(el => {
        const {id, ...itemProps} = el
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={()=> onDelete(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    )
}
export default EmployeesList;