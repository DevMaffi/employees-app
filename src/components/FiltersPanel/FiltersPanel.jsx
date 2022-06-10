import EmployeesFilter from '../EmployeesFilter'

import SearchPanel from '../common/SearchPanel'

import './FiltersPanel.css'

function FiltersPanel({ queryString, onSearch }) {
  return (
    <div className="filters-panel">
      <SearchPanel
        placeholder="Find an employee"
        queryString={queryString}
        onSearch={onSearch}
      />
      <EmployeesFilter />
    </div>
  )
}

export default FiltersPanel
