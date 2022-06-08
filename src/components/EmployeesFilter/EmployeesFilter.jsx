import { Filter, Button } from '../common'

function EmployeesFilter() {
  return (
    <Filter>
      <Button active>All employees</Button>
      <Button>For rise</Button>
      <Button>Salary {'>'} 1000%</Button>
    </Filter>
  )
}

export default EmployeesFilter
