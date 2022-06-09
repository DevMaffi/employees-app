import { AppForm, Button } from '../common'

import './EmployeesAddForm.css'

class EmployeesAddForm extends AppForm {
  state = {
    data: {
      name: '',
      salary: '',
    },
  }

  render() {
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex">
          {this.renderInput('name', "What's his name?", 'new-post-label')}
          {this.renderInput(
            'salary',
            'Salary in $?',
            'new-post-label',
            'number'
          )}
          <Button type="submit">Add</Button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm
