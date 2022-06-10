import { Filter, Button } from '../common'

function EmployeesFilter({ filters, onFilterChange }) {
  return (
    <Filter>
      {filters.map((filter, i) => (
        <Button
          key={i}
          active={filter.isActive}
          onClick={() => onFilterChange(filter)}
        >
          {filter.label}
        </Button>
      ))}
    </Filter>
  )
}

export default EmployeesFilter
