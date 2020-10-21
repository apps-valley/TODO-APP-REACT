import React from "react";
import { Form } from "components";
const EditPersonPage = ({ match }) => (
  <div>
    Edit person
    <Form id={match.params.id} />
  </div>
);
export default EditPersonPage;
