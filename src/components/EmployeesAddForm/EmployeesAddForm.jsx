import AppInput from '../common/AppInput'

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
        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  )
}

export default EmployeesAddForm
