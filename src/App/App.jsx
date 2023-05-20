import { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import FiltersPanel from '../components/FiltersPanel'
import EmployeeListItem from '../components/EmployeeListItem'
import EmployeesAddForm from '../components/EmployeesAddForm'

import ListGroup from '../components/common/ListGroup'

const StyledApp = styled.div`
  margin: 50px auto;
  max-width: 1000px;
`

export class App extends Component {
  state = {
    employees: [
      { id: 1, name: 'Максим Р.', salary: 50000, like: true },
      { id: 2, name: 'Олександра Р.', salary: 50000, increase: true },
    ],
    queryString: '',
    filters: [
      { label: 'Всі працівники', type: 'all', isActive: true },
      {
        label: 'Відмічені',
        type: 'like',
        predicate: e => e.like,
      },
      {
        label: 'На підвищення',
        type: 'increase',
        predicate: e => e.increase,
      },
      {
        label: 'ЗП > 1000',
        type: 'moreThen',
        predicate: e => e.salary > 1000,
      },
    ],
    doFilter: null,
  }

  maxId = 4

  onSalaryChange = (e, item) => {
    const employees = [...this.state.employees]
    const index = employees.indexOf(item)
    employees[index] = { ...item }

    const { currentTarget: input } = e
    employees[index].salary = +input.value.match(/\d+/)?.[0] || ''

    this.setState({ employees })
  }

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

  onFilterChange = filter => {
    const filters = [...this.state.filters]
    const active = filters.find(f => f.isActive)

    if (active === filter) return

    const activeIndex = filters.indexOf(active)
    filters[activeIndex] = { ...active, isActive: false }

    const index = filters.indexOf(filter)
    filters[index] = { ...filter }
    filters[index].isActive = !filter.isActive

    this.setState({ filters, doFilter: filter.predicate })
  }

  #getFilteredData = () => {
    const { employees, queryString, doFilter } = this.state

    const searched = queryString
      ? employees.filter(e =>
          e.name.toLowerCase().includes(queryString.toLowerCase())
        )
      : employees

    const filtered = doFilter ? searched.filter(doFilter) : searched

    const withPremium = filtered.filter(e => e.increase).length

    const totalSalary = filtered.reduce((sum, acc) => sum + +acc.salary, 0)

    return {
      data: filtered,
      total: filtered.length,
      withPremium,
      totalSalary,
    }
  }

  render() {
    const {
      total,
      data: employees,
      withPremium,
      totalSalary,
    } = this.#getFilteredData()

    const { queryString, filters } = this.state

    return (
      <StyledApp>
        <Header
          total={total}
          withPremium={withPremium}
          totalSalary={totalSalary}
        />
        <FiltersPanel
          queryString={queryString}
          onSearch={this.onSearch}
          filters={filters}
          onFilterChange={this.onFilterChange}
        />
        <ListGroup
          data={employees}
          component={EmployeeListItem}
          onSalaryChange={this.onSalaryChange}
          onIncrease={this.onIncrease}
          onLike={this.onLike}
          onDelete={this.onDelete}
        />
        <EmployeesAddForm onAdd={this.onAdd} />
      </StyledApp>
    )
  }
}

export default App
