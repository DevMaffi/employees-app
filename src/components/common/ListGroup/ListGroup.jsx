import styled from 'styled-components'

function ListGroup({
  data,
  className,
  component: Component,
  ...componentProps
}) {
  const classNames = `list-group ${className}`

  return (
    <ul className={classNames}>
      {data.map(item => {
        const { id } = item
        return <Component key={id} item={item} {...componentProps} />
      })}
    </ul>
  )
}

const StyledList = styled(ListGroup)`
  margin-top: 30px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: white;
`

export default StyledList
