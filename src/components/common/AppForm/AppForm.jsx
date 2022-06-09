import { Component } from 'react'

import AppInput from '../AppInput'

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

  renderInput = (name, placeholder, className, type) => {
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
}

export default AppForm
