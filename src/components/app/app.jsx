import { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app.filter";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [
        { name: "Kai Fors", salary: 300, increase: false, id: 1 },
        { name: "John Smith", salary: 5200, increase: false, id: 2 },
        { name: "Kai", salary: 4000, increase: true, id: 3 },
      ],
      idGenerate: 4
    };
  }

  deleteItem = (id) => {
    this.setState(({ date }) => {
      return {
        date: date.filter((el) => el.id !== id),
      };
    });
  };
  
  addItem = (user) => {
    console.log(user)
    this.setState(({ date }) => {
      return {
        date: [...date, user]
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList date={this.state.date} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} id={this.state.date.length + 1}/>
      </div>
    );
  }
}

export default App;
