import { Component } from 'react'

import Header from '../Header'
import FiltersPanel from '../FiltersPanel'
import EmployeeListItem from '../EmployeeListItem'
import EmployeesAddForm from '../EmployeesAddForm'

import ListGroup from '../common/ListGroup'

import './App.css'

export class App extends Component {
  state = {
    employees: [
      { id: 1, name: 'John C.', salary: 800, increase: true },
      { id: 2, name: 'Alex M.', salary: 3000, like: true },
      { id: 3, name: 'Carl W.', salary: 5000 },
    ],
  }

  maxId = 4

  #toggleEmployeeProp = (item, propName) => {
    const employees = [...this.state.employees]
    const index = employees.indexOf(item)
    employees[index] = { ...item }
    employees[index][propName] = !item[propName]

    this.setState({ employees })
  }

  onIncrease = item => {
    this.#toggleEmployeeProp(item, 'increase')
  }

  onLike = item => {
    this.#toggleEmployeeProp(item, 'like')
  }

  onDelete = id => {
    const employees = this.state.employees.filter(e => e.id !== id)
    this.setState({ employees })
  }

  onAdd = (name, salary) => {
    const employee = { id: this.maxId++, name, salary }

    const employees = [...this.state.employees]
    employees.push(employee)

    this.setState({ employees })
  }

  render() {
    const { employees } = this.state
    const { length: total } = employees
    const { length: withPremium } = employees.filter(e => e.increase)

    return (
      <div className="app">
        <Header total={total} withPremium={withPremium} />
        <FiltersPanel />
        <ListGroup
          data={employees}
          component={EmployeeListItem}
          onIncrease={this.onIncrease}
          onLike={this.onLike}
          onDelete={this.onDelete}
        />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    )
  }
}

export default App
