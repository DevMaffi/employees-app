import './ListGroup.css'

function ListGroup({ data, component: Component, ...componentProps }) {
  return (
    <ul className="list-group list">
      {data.map(item => {
        const { id } = item
        return <Component key={id} item={item} {...componentProps} />
      })}
    </ul>
  )
}

export default ListGroup
