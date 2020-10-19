import React, { useContext } from "react";
import { PeopleContext } from "./context";

const Form = () => {
  const [name, setName] = React.useState("");
  const { people, dispatch } = useContext(PeopleContext);
  console.log(people);
  const onChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PERSON", people: { name } });
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={onChange} />
      <input type="submit" />
    </form>
  );
};

export default Form;
