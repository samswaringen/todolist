
import './App.css';
import React from 'react'
import {Formik, Form, Field, FieldArray} from 'formik'

const initialValues = {
  todos: ['Do Laundry','Learn React','Finish Modules in bootcamp']
};

const onSubmit = (values)=> {
  console.log(values.todos)
}; 

const validate = (errors)=> {
  console.log('validating', errors)
};
const  App = ()=> (
  <div className = 'container'>
    <Formik 
      initialValues = {initialValues}
      onSubmit = {onSubmit}
      validate = {validate}
    >
      <Form id = 'form'>
        <div className ='form-control'>
          <label id = 'todoTitle' htmlFor = 'todos'>List of ToDos</label>
          <FieldArray name='todos'>
              {fieldArrayProps => {
                    const {push, remove, form} = fieldArrayProps
                    const { values } = form;
                    const { todos } = values;
                    return (
                        <div>
                            {todos.map((todo, i)=>(
                                <div key = {i}>
                                    <Field type = 'text' name = {`todos[${i}]`}  placeholder = 'Add todo' className = 'todoItem' />
                                    <button type = 'button' onClick = {()=>remove(i)} className = 'remove'> remove </button>
                                </div>
                            ))}
                            <button type = 'button' onClick = {()=>push('')} id = 'add'> Add New ToDo </button>  
                        </div>
                    )
                  }
              }
          </FieldArray>
        </div>
        </Form>
    </Formik>
  </div>
)
export default App;
