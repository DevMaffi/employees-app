import { Component } from 'react'

import { AppInput, Button } from '../common'

import './EmployeesAddForm.css'

class EmployeesAddForm extends Component {
  state = {
    data: {
      name: '',
      salary: '',
    },
  }

  onValueChange = e => {
    const { currentTarget: input } = e

    const data = { ...this.state.data }
    data[input.name] = input.value

    this.setState({ data })
  }

  #renderInput = (name, placeholder, type) => {
    type = type ?? 'text'

    return (
      <AppInput
        type={type}
        name={name}
        className="new-post-label"
        placeholder={placeholder}
        value={this.state.data[name]}
        onChange={this.onValueChange}
      />
    )
  }

  render() {
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex">
          {this.#renderInput('name', "What's his name?")}
          {this.#renderInput('salary', 'Salary in $?', 'number')}
          <Button type="submit">Add</Button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm
