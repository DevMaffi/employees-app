import './EmployeeListItem.css'

function EmployeeListItem({
  item,
  onSalaryChange,
  onIncrease,
  onLike,
  onDelete,
}) {
  const { id, name, salary, increase, like } = item

  let classNames = 'list-group-item d-flex justify-content-between '

  classNames += increase ? 'increase ' : ''
  classNames += like ? 'like ' : ''

  return (
    <li className={classNames.trim()}>
      <span className="list-group-item-label" onClick={() => onLike(item)}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        value={`$${salary}`}
        onInput={e => onSalaryChange(e, item)}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={() => onIncrease(item)}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={() => onDelete(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeeListItem
