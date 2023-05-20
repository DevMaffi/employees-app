import styled from 'styled-components'

import { AppForm } from '../common'

const StyledAddForm = styled.div`
  margin-top: 30px;
  padding: 25px;
  border-radius: 4px;
  background-color: #3d5a80;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;

  & .add-form {
    margin-top: 20px;
  }

  & .add-form input {
    width: 350px;
    margin-right: 20px;
  }
`

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
      <StyledAddForm>
        <h3>Додати працівника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          {this.renderInput('name', "Ім'я", 'new-post-label')}
          {this.renderInput('salary', 'ЗП в ₴', 'new-post-label', 'number')}
          {this.renderSubmitButton('Додати')}
        </form>
      </StyledAddForm>
    )
  }
}

export default EmployeesAddForm
