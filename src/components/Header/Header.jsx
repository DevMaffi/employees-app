import './Header.css'

function Header({ employees }) {
  return (
    <div className="app-info">
      <h1>Employees accountant</h1>
      <h2>Total number of employees - {employees.total}</h2>
      <h2>Will receive the award - {employees.withPremium}</h2>
    </div>
  )
}

export default Header
