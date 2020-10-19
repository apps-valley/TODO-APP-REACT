import React from "react";
import { PeopleContext } from "./context";
const People = () => {
  const { people } = React.useContext(PeopleContext);
  return (
    <div>
      {people.map((peep, key) => (
        <p key={key}>{peep.name}</p>
      ))}
    </div>
  );
};

export default People;
