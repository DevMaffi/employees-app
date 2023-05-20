import styled from 'styled-components'

function EmployeeListItem({
  item,
  className,
  onSalaryChange,
  onIncrease,
  onLike,
  onDelete,
}) {
  const { id, name, salary } = item

  let classNames = `${className} list-group-item d-flex justify-content-between`

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={() => onLike(item)}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        value={`₴${salary}`}
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

const StyledListGroupItem = styled(EmployeeListItem)`
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;

  &:last-child {
    border-bottom: none;
  }

  & span {
    min-width: 550px;
    font-size: 20px;
    line-height: 35px;
    cursor: pointer;
  }

  & input {
    border: 0;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
  }

  & button {
    width: 35px;
    height: 35px;
    margin: 3px;
    border: none;
    font-size: 17px;
    cursor: pointer;
  }

  & .btn-cookie {
    color: #e09f3e;
  }

  & .btn-trash {
    color: #e5383b;
  }

  & .fa-star {
    width: 35px;
    height: 35px;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    color: #ffd700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
  }

  ${props => {
    if (props.item.increase)
      return `
        & .list-group-item-label,
        .list-group-item-input {
          color: #e09f3e;
        }

        & .btn-star {
          color: #aeaeae;
        }
      `
  }}

  ${props => {
    if (props.item.like)
      return `
        & .fa-star {
          transform: translateX(0px);
          opacity: 1;
        }
      `
  }}
`

export default StyledListGroupItem
