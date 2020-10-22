import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { PeopleContext } from "context";
import Options from "./Options";
import countries from "./countries";
import { ADD_PERSON, EDIT_PERSON } from "context/reducer";
import { HomeRoute } from "routes/routeNames";
import { useForm, capitalize } from "./helpers";

const ADD_BUTTON = "Add Employee";
const EDIT_BUTTON = "Save";

const Form = ({ id, history }) => {
  const [buttonValue, setButtonValue] = useState("");
  const [currentPerson, setCurrentPerson] = useState({});
  const getCurrentPerson = () => people.find((person) => person.id === id);
  const { people, dispatch } = useContext(PeopleContext);
  const initialValueForSelect = countries[0].label;
  const { values, handleChange, setInitialValues } = useForm({
    name: "",
    title: "",
    country: initialValueForSelect,
    salary: "",
    birth: "",
  });
  const classForSelect = `input ${
    values.country === initialValueForSelect ? "is-grey" : "is-black"
  }`;

  useEffect(() => {
    startSettingButtonValue();
    const person = getCurrentPerson();
    if (person) {
      setCurrentPerson(person);
      setInitialValues(currentPerson);
    }
  }, [currentPerson]);

  const startSettingButtonValue = () =>
    id ? setButtonValue(EDIT_BUTTON) : setButtonValue(ADD_BUTTON);

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

    dispatch({ type: EDIT_PERSON, person });
  };

  const startAddPerson = () => {
    const { title, country, salary, birth } = values;
    let { name } = values;
    name = capitalize(name);
    const person = {
      name,
      title,
      country,
      salary,
      birth,
    };

    dispatch({ type: ADD_PERSON, person });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setAction();
    history.push(HomeRoute);
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
            value={values.name || ""}
            className="input"
            required
          />
          <legend>First and last names</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="birth">Birthdate</label>
          <input
            type="date"
            name="birth"
            placeholder="e.g. 17/02/1990"
            onChange={handleChange}
            value={values.birth || ""}
            className="input"
            required
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
            value={values.title || ""}
            className="input"
            required
          />
          <legend>What is their role?</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="country">Country</label>
          <select
            className={classForSelect}
            required
            name="country"
            value={values.country || ""}
            onChange={handleChange}
          >
            <Options currentPerson={currentPerson} />
          </select>
          <legend>Where are they based?</legend>
        </fieldset>
        <fieldset>
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            name="salary"
            placeholder="e.g. 50000"
            onChange={handleChange}
            value={values.salary || ""}
            className="input"
            required
          />
          <legend>Gross yearly salary</legend>
        </fieldset>
      </div>
      <div className="button-group">
        <Link to={HomeRoute} className="button button--white">
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
