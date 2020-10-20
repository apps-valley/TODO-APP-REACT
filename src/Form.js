import React, { useContext } from "react";
import { PeopleContext } from "./context";

const Form = ({ id, isEdit }) => {
  const [name, setName] = React.useState("");
  const { people, dispatch } = useContext(PeopleContext);
  const onChange = (e) => {
    setName(e.target.value);
  };

  const setAction = () => (isEdit ? startEditPerson() : startAddPerson());

  const startEditPerson = () =>
    dispatch({ type: "EDIT_PERSON", people: { name: "smth new here" } });

  const startAddPerson = () =>
    dispatch({ type: "ADD_PERSON", people: { name } });

  const onSubmit = (e) => {
    e.preventDefault();
    setAction();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={onChange} />
      <input type="submit" />
    </form>
  );
};

export default Form;
