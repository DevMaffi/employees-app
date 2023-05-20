import styled from 'styled-components'

const StyledAppInfo = styled.div`
  padding: 25px;
  border-radius: 4px;
  background-color: #3d5a80;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: white;
`

function Header({ total, withPremium, totalSalary }) {
  return (
    <StyledAppInfo>
      <h1>Облік працівників</h1>
      <h2>Загальна кількість кадрів - {total}</h2>
      <h2>Отримають підвищення - {withPremium}</h2>
      <h2>Загальна сума виплат - ₴{totalSalary}</h2>
    </StyledAppInfo>
  )
}

export default Header
