import { useState } from 'react';
import { omit } from 'lodash';

const useForm = (callback) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("Formuläret innehåller fel!")
    }
  };

  const validate = (event, name, value) => {
    switch (name) {
      case 'firstName':
        if (value.length < 2) {
          setErrors({
            ...errors,
            'firstName': 'Ett namn måste ha minst 2 bokstäver!'
          })
        } else {
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;
      case 'surName':
        if (value.length < 2) {
          setErrors({
            ...errors,
            'surName': 'Ett namn måste ha minst 2 bokstäver!'
          })
        } else {
          let newObj = omit(errors, "surName");
          setErrors(newObj);
        }
        break;

      case 'age':
        if ((isNaN(value)) || value >= 18) {
          setErrors({
            ...errors,
            age: 'Skriv in en siffra, mindre än 18!'
          })
        } else {
          let newObj = omit(errors, "age");
          setErrors(newObj)
        }
        break;
      default:
        break;
    }
  }

  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    })
  }
  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
};
export default useForm;