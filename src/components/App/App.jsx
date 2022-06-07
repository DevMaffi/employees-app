import { Component } from 'react'

import Header from '../Header'

import { SearchPanel, Filter, FilterButton } from '../../common'

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
          <Filter>
            <FilterButton active>All employees</FilterButton>
            <FilterButton>For rise</FilterButton>
            <FilterButton>Salary {'>'} 1000%</FilterButton>
          </Filter>
        </div>
      </div>
    )
  }
}

export default App
