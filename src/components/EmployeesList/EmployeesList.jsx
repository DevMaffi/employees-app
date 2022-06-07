import EmployeeListItem from '../EmployeeListItem'

import './EmployeesList.css'

function EmployeesList({ employees }) {
  return (
    <ul className="list-group list">
      {employees.map(item => (
        <EmployeeListItem key={item.id} name={item.name} />
      ))}
    </ul>
  )
}

export default EmployeesList
