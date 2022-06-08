import './ListGroup.css'

function ListGroup({ data, component: Component, labelProp }) {
  return (
    <ul className="list-group list">
      {data.map(item => (
        <Component key={item.id} label={item[labelProp]} />
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  labelProp: 'label',
}

export default ListGroup
