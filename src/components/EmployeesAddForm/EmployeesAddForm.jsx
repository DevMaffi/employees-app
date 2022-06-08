import { AppInput, Button } from '../common'

import './EmployeesAddForm.css'

function EmployeesAddForm() {
  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex">
        <AppInput className="new-post-label" placeholder="What's his name?" />
        <AppInput
          type="number"
          className="new-post-label"
          placeholder="Salary in $?"
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  )
}

export default EmployeesAddForm
