import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { PeopleContext } from "context";
import countries from "./countries";
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
    setInitialValues: (initialValues) => {
      setValues({
        ...initialValues,
      });
    },
  };
};

const Form = ({ id, history }) => {
  const getCurrentPerson = () => people.find((person) => person.id === id);
  const { people, dispatch } = useContext(PeopleContext);
  const preselectedOption = countries[0].label;
  const { values, handleChange, setInitialValues } = useForm({
    name: "",
    title: "",
    country: preselectedOption,
    salary: "",
    birth: "",
  });

  useEffect(() => {
    const currentPerson = getCurrentPerson();
    if (currentPerson) {
      setInitialValues(currentPerson);
    }
  }, []);

  const setAction = () => (id ? startEditPerson() : startAddPerson());

  const startEditPerson = () => {
    const { name, title, country, salary, birth } = values;
    const person = {
      name,
      title,
      country,
      salary,
      birth,
      id,
    };

    dispatch({ type: "EDIT_PERSON", person });
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
        required
      />
      <input
        type="date"
        name="birth"
        placeholder="birth"
        onChange={handleChange}
        value={values.birth}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={values.title}
        required
      />
      <input
        type="number"
        name="salary"
        placeholder="salary"
        onChange={handleChange}
        value={values.salary}
        required
      />
      <select name="country" value={values.country} onChange={handleChange}>
        {countries.map((country, key) => (
          <option key={key} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>

      <input type="submit" />
    </form>
  );
};

export default withRouter(Form);
