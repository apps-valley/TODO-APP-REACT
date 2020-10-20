import React from "react";
import PeopleList from "./PeopleList";
import { Link } from "react-router-dom";
const HomePage = () => (
  <>
    <Link to="/create"> Create</Link>
    <PeopleList />
  </>
);

export default HomePage;
