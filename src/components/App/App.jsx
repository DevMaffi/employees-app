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
    queryString: '',
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

  onSearch = e => {
    const { currentTarget: input } = e
    this.setState({ queryString: input.value })
  }

  #getFilteredData = () => {
    const { employees, queryString } = this.state

    let filtered = employees

    if (queryString)
      filtered = employees.filter(e =>
        e.name.toLowerCase().startsWith(queryString.toLowerCase())
      )

    const withPremium = filtered.filter(e => e.increase).length

    return {
      data: filtered,
      total: filtered.length,
      withPremium,
    }
  }

  render() {
    const { total, data: employees, withPremium } = this.#getFilteredData()

    return (
      <div className="app">
        <Header total={total} withPremium={withPremium} />
        <FiltersPanel
          queryString={this.state.queryString}
          onSearch={this.onSearch}
        />
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
