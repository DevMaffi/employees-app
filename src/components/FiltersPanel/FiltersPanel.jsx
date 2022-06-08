import EmployeesFilter from '../EmployeesFilter'

import SearchPanel from '../common/SearchPanel'

import './FiltersPanel.css'

function FiltersPanel() {
  return (
    <div className="filters-panel">
      <SearchPanel placeholder="Find an employee" />
      <EmployeesFilter />
    </div>
  )
}

export default FiltersPanel
