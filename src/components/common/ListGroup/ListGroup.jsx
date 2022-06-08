import './ListGroup.css'

function ListGroup({ data, component: Component }) {
  return (
    <ul className="list-group list">
      {data.map(item => {
        const { id, ...rest } = item
        return <Component key={id} {...rest} />
      })}
    </ul>
  )
}

export default ListGroup
