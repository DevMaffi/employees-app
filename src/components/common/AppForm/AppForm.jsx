import { Component } from 'react'

import AppInput from '../AppInput'
import Button from '../Button'

class AppForm extends Component {
  state = {
    data: {},
  }

  onValueChange = e => {
    const { currentTarget: input } = e

    const data = { ...this.state.data }
    data[input.name] = input.value

    this.setState({ data })
  }

  onSubmit = e => {
    e.preventDefault()
    this.doSubmit()
  }

  renderInput = (name, placeholder, className, type) => {
    className = className ?? ''
    type = type ?? 'text'

    return (
      <AppInput
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={this.state.data[name]}
        onChange={this.onValueChange}
      />
    )
  }

  renderSubmitButton = label => <Button type="submit">{label}</Button>
}

export default AppForm
