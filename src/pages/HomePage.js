import React from "react";
import { Link } from "react-router-dom";
import { PeopleList } from "components";
export const HomePage = () => (
  <>
    <Link to="/create"> Create</Link>
    <PeopleList />
  </>
);
