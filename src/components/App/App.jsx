import { Component } from 'react'

import Header from '../Header'
import EmployeesFilter from '../EmployeesFilter'
import EmployeesList from '../EmployeesList'

import { SearchPanel } from '../common'

import './App.css'

export class App extends Component {
  state = {
    employees: [
      { id: 1, name: 'John Smith' },
      { id: 2, name: 'Brad Pit' },
      { id: 3, name: 'Hanna Baker' },
    ],
  }

  render() {
    const { employees } = this.state
    const { length: total } = employees

    return (
      <div className="app">
        <Header total={total} withPremium="0" />
        <div className="filters-panel">
          <SearchPanel placeholder="Find an employee" />
          <EmployeesFilter />
        </div>
        <EmployeesList employees={employees} />
      </div>
    )
  }
}

export default App
