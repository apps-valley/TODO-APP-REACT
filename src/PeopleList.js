import React from "react";
import { PeopleContext } from "./context";
import { Link } from "react-router-dom";

const PeopleList = () => {
  const { people } = React.useContext(PeopleContext);
  return (
    <div>
      {people.map(({ id, name, title, salary, country, birth }, key) => (
        <div key={key}>
          <p>
            {name} | {title} | {salary} | {country} | {birth}
          </p>

          <Link to={`/edit/${id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
