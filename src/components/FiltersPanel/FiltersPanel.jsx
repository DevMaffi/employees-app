import styled from 'styled-components'

import EmployeesFilter from '../EmployeesFilter'

import SearchPanel from '../common/SearchPanel'

const StyledFiltersPanel = styled.div`
  margin-top: 30px;
  padding: 25px;
  border-radius: 4px;
  background-color: #3d5a80;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: white;
`

function FiltersPanel({ queryString, onSearch, filters, onFilterChange }) {
  return (
    <StyledFiltersPanel>
      <SearchPanel
        placeholder="Find an employee"
        queryString={queryString}
        onSearch={onSearch}
      />
      <EmployeesFilter filters={filters} onFilterChange={onFilterChange} />
    </StyledFiltersPanel>
  )
}

export default FiltersPanel
