function AppInput({ className, ...rest }) {
  const classNames = `form-control ${className}`

  return <input {...rest} className={classNames} />
}

AppInput.defaultProps = {
  type: 'text',
}

export default AppInput
