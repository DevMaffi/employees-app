import { Component } from 'react'

import Header from '../Header'

import { SearchPanel, Filter } from '../../common'

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
            <button type="button" className="btn btn-light">
              All employees
            </button>
            <button type="button" className="btn btn-outline-light">
              For rise
            </button>
            <button type="button" className="btn btn-outline-light">
              Salary {'>'} 1000%
            </button>
          </Filter>
        </div>
      </div>
    )
  }
}

export default App
