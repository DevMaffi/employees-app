function FilterButton(props) {
  let classNames = 'btn btn-'
  classNames += props.active ? 'light' : 'outline-light'

  return (
    <button type="button" className={classNames}>
      {props.children}
    </button>
  )
}

export default FilterButton
