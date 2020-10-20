import React from "react";
import { PeopleContext } from "./context";
import { Link } from "react-router-dom";

const PeopleList = () => {
  const { people } = React.useContext(PeopleContext);
  return (
    <div>
      {people.map((peep, key) => (
        <div key={key}>
          <p>{peep.name}</p>
          <Link to={`/edit/${peep.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
