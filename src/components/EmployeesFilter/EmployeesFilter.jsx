import { Filter, FilterButton } from '../../common'

function EmployeesFilter() {
  return (
    <Filter>
      <FilterButton active>All employees</FilterButton>
      <FilterButton>For rise</FilterButton>
      <FilterButton>Salary {'>'} 1000%</FilterButton>
    </Filter>
  )
}

export default EmployeesFilter
