import { AppForm } from '../common'

import './EmployeesAddForm.css'

class EmployeesAddForm extends AppForm {
  state = {
    data: {
      name: '',
      salary: '',
    },
  }

  doSubmit = () => {
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
