import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
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

const Form = ({ id, isEdit, history }) => {
  const { values, handleChange, reset } = useForm({
    name: "",
    title: "",
    country: "",
    salary: "",
    birth: "",
  });

  const { people, dispatch } = useContext(PeopleContext);

  const setAction = () => (isEdit ? startEditPerson() : startAddPerson());

  const startEditPerson = () => {
    dispatch({ type: "EDIT_PERSON", person: { name: values.name, id } });
  };

  const startAddPerson = () => {
    const { name, title, country, salary, birth } = values;
    const person = {
      name,
      title,
      country,
      salary,
      birth,
    };
    dispatch({ type: "ADD_PERSON", person });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // reset(); // duplicate?
    setAction();
    history.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name..."
        onChange={handleChange}
        value={values.name}
      />

      <input
        type="text"
        name="birth"
        placeholder="birth"
        onChange={handleChange}
        value={values.birth}
      />

      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={values.title}
      />
      <input
        type="number"
        name="salary"
        placeholder="salary"
        onChange={handleChange}
        value={values.salary}
      />
      <input
        type="text"
        name="country"
        placeholder="country"
        onChange={handleChange}
        value={values.country}
      />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Form);
