function Button(props) {
  const { type, active } = props

  let classNames = 'btn btn-'
  classNames += active ? 'light' : 'outline-light'

  return (
    <button type={type} className={classNames}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
}

export default Button
