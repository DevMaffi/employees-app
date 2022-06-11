import styled from 'styled-components'

function Filter(props) {
  const classNames = `btn-group ${props.className}`
  return <div className={classNames}>{props.children}</div>
}

const StyledFilter = styled(Filter)`
  margin-top: 20px;
`

export default StyledFilter
