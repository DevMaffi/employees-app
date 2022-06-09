import { AppForm } from '../common'

import './EmployeesAddForm.css'

class EmployeesAddForm extends AppForm {
  state = {
    data: {
      name: '',
      salary: '',
    },
  }

  validate = () => {
    const { data } = this.state
    const hasEmpty = !!Object.keys(data).find(
      key => data[key].trim().length === 0
    )

    return hasEmpty ? false : true
  }

  doSubmit = () => {
    if (!this.validate()) return

    const { name, salary } = this.state.data
    this.props.onAdd(name, salary)

    this.setState({ data: { name: '', salary: '' } })
  }

  render() {
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          {this.renderInput('name', "What's his name?", 'new-post-label')}
          {this.renderInput(
            'salary',
            'Salary in $?',
            'new-post-label',
            'number'
          )}
          {this.renderSubmitButton('Add')}
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm
