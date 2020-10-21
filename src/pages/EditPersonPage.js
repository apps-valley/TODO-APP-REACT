import React from "react";
import { Form } from "components";
export const EditPersonPage = ({ match }) => (
  <div>
    Edit person
    <Form id={match.params.id} />
  </div>
);
