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
      { id: 2, name: 'Alex M.', salary: 3000 },
      { id: 3, name: 'Carl W.', salary: 5000 },
    ],
  }

  render() {
    const { employees } = this.state
    const { length: total } = employees
    const { length: withPremium } = employees.filter(e => e.increase)

    return (
      <div className="app">
        <Header total={total} withPremium={withPremium} />
        <FiltersPanel />
        <ListGroup data={employees} component={EmployeeListItem} />
        <EmployeesAddForm />
      </div>
    )
  }
}

export default App
