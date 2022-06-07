import { Component } from 'react'

import Header from '../Header'
import EmployeesFilter from '../EmployeesFilter'

import { SearchPanel } from '../../common'

import './App.css'

export class App extends Component {
  state = {
    employees: {
      total: 0,
      withPremium: 0,
    },
  }

  render() {
    return (
      <div className="app">
        <Header employees={this.state.employees} />
        <div className="filters-panel">
          <SearchPanel placeholder="Find an employee" />
          <EmployeesFilter />
        </div>
      </div>
    )
  }
}

export default App
