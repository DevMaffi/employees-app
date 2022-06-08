import './Header.css'

function Header({ total, withPremium }) {
  return (
    <div className="app-info">
      <h1>Employees accountant</h1>
      <h2>Total number of employees - {total}</h2>
      <h2>Will receive the increase - {withPremium}</h2>
    </div>
  )
}

export default Header
