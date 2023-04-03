import './search-panel.css';

const SearchPanel = () => {
    return (
        <div>
            <input type="text" 
            placeholder="Найти сотрудника"
            className='form-control search-input'
            />
        </div>
    )
}

export default SearchPanel;