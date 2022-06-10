function Button(props) {
  const { active, ...rest } = props

  let classNames = 'btn btn-'
  classNames += active ? 'light' : 'outline-light'

  return (
    <button className={classNames} {...rest}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
}

export default Button
