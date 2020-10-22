import React from "react";
import { PeopleContext } from "context";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import userIcon from "resources/user-profile.svg";
import moment from "moment";

const PeopleList = () => {
  const { people } = React.useContext(PeopleContext);
  const peopleEnding = people.length > 1 ? "es" : "r";
  const formateDate = (date) => moment(date).format("DD/MM/YYYY");

  return (
    <section className="people">
      <div className="people__header container__inner">
        <h1>People</h1>
        <span>
          {people.length} employe{peopleEnding}
        </span>
        <Link
          to="/create"
          className="button button--purple button--create is-right"
        >
          <span className="icon">
            <ReactSVG src={userIcon} />
          </span>
          Add Employee
        </Link>
      </div>
      <div className="people__labels">
        <h5>Employee</h5>
        <h5>Job Title</h5>
        <h5>Salary</h5>
        <h5>Country</h5>
      </div>
      {people.map(({ id, name, title, salary, country, birth }, key) => (
        <article className="person" key={key}>
          <div className="person__data person--name">
            <h2>{name}</h2>
            <p>{formateDate(birth)}</p>
          </div>
          <h3 className="person__data">{title}</h3>
          <h3 className="person__data person--salary">
            <b>{salary}</b> year
          </h3>
          <h3 className="person__data">{country} </h3>
          <Link className="button button--white" to={`/edit/${id}`}>
            Edit
          </Link>
        </article>
      ))}
    </section>
  );
};

export default PeopleList;
