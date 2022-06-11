import styled from 'styled-components'

const AppInfo = styled.div`
  padding: 25px;
  border-radius: 4px;
  background-color: #3d5a80;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: white;
`

function Header({ total, withPremium }) {
  return (
    <AppInfo>
      <h1>Employees accountant</h1>
      <h2>Total number of employees - {total}</h2>
      <h2>Will receive the increase - {withPremium}</h2>
    </AppInfo>
  )
}

export default Header
