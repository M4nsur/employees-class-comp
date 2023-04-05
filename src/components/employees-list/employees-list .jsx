import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({date, onDelete, onHandle}) => {
    const items = date.map(el => {
        const {id, ...itemProps} = el
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={()=> onDelete(id)}
            onHandle={(e) => onHandle(id, e.currentTarget.getAttribute('dataForHandle'))}
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