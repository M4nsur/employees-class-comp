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
        { name: "Kai Fors", salary: 300, increase: false, id: 1, fav: false },
        { name: "John Smith", salary: 5200, increase: false, id: 2, fav: false },
        { name: "Kai", salary: 4000, increase: false, id: 3, fav: false },
      ],
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

  handleIncrease = (id) => {
    this.setState(({date}) => {
      return {
        date: date.map(el => {
          if (el.id === id) {
            return {...el, increase: !el.increase}
          }
          return el
        })
      }
    }) 
}

handleProp = (id, prop) => {
  this.setState(({date}) => {
    return {
      date: date.map(el => {
        if (el.id === id) {
          return {...el, [prop]: !el[prop]}
        }
        return el
      })
    }
  }) 
}

  render() {
    const counterIncrease =
      this.state.date.filter(el => {
        return el.increase;
      })
  
    return (
      <div className="app">
        <AppInfo amountEmp={this.state.date.length} increaseEmp={counterIncrease.length}/>
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList 
          date={this.state.date} 
          onDelete={this.deleteItem} 
          onHandle={this.handleProp}
          />
        <EmployeesAddForm onAdd={this.addItem} id={this.state.date.length + 1}/>
      </div>
    );
  }
}

export default App;
