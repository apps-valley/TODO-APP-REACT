import React, { useContext, useState } from "react";
import { PeopleContext } from "./context";
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    reset: () => setValues(initialValues),
  };
};

const Form = ({ id, isEdit }) => {
  const { values, handleChange, reset } = useForm({
    name: "",
  });

  const { people, dispatch } = useContext(PeopleContext);

  const setAction = () => (isEdit ? startEditPerson() : startAddPerson());

  const startEditPerson = () => {
    dispatch({ type: "EDIT_PERSON", people: { name: "smth new here" } });
  };

  const startAddPerson = () =>
    dispatch({ type: "ADD_PERSON", people: { name: values.name } });

  const onSubmit = (e) => {
    e.preventDefault();
    reset();
    setAction();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        type="text"
        name="name"
        placeholder="Enter your name..."
        onChange={handleChange}
        value={values.name}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
