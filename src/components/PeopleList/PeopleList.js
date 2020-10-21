import React from "react";
import { PeopleContext } from "context";
import { Link } from "react-router-dom";

const PeopleList = () => {
  const { people } = React.useContext(PeopleContext);
  return (
    <section className="people">
      {people.map(({ id, name, title, salary, country, birth }, key) => (
        <article key={key}>
          <p>
            {name} | {title} | {salary} | {country} | {birth}
          </p>

          <Link to={`/edit/${id}`}>Edit</Link>
        </article>
      ))}
    </section>
  );
};

export default PeopleList;
