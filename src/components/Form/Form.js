import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { PeopleContext } from "context";
import Options from "./Options";
import moment from "moment";
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange: (e) => {
      values.birth = moment(values.birth).format("YYYY-MM-DD");
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
  const [buttonValue, setButtonValue] = useState("");
  const getCurrentPerson = () => people.find((person) => person.id === id);
  const { people, dispatch } = useContext(PeopleContext);

  const { values, handleChange, setInitialValues } = useForm({
    name: "",
    title: "",
    country: "",
    salary: "",
    birth: "",
  });

  useEffect(() => {
    startSettingButtonValue();
    const currentPerson = getCurrentPerson();
    if (currentPerson) {
      setInitialValues(currentPerson);
    }
  }, []);

  const startSettingButtonValue = () =>
    id ? setButtonValue("Save") : setButtonValue("Add Employee");

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
      <div className="form-container">
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Jane Doe"
            onChange={handleChange}
            value={values.name}
            required
            className="input"
          />
          <legend>First and last names</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="date">Birthdate</label>
          <input
            type="date"
            name="birth"
            placeholder="e.g. 17/02/1990"
            onChange={handleChange}
            value={values.birth}
            required
            className="input"
          />
          <legend>DD/MM/YYYY</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="title">Job title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g Product manager"
            onChange={handleChange}
            value={values.title}
            required
            className="input"
          />
          <legend>What is their role?</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="number">Country</label>
          <select
            required
            className="input"
            name="country"
            value={values.country}
            onChange={handleChange}
            placeholder="Portugal"
          >
            <Options />
          </select>
          <legend>Where are they based?</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="country">Salary</label>
          <input
            type="number"
            name="salary"
            placeholder="e.g. 50000"
            onChange={handleChange}
            value={values.salary}
            required
            className="input"
          />
          <legend>Gross yearly salary</legend>
        </fieldset>
      </div>
      <div className="button-group">
        <Link to="/" className="button button--white">
          Cancel
        </Link>
        <input
          type="submit"
          value={buttonValue}
          className="button button--purple"
        />
      </div>
    </form>
  );
};

export default withRouter(Form);
