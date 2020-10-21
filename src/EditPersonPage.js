import React from "react";
import Form from "./Form";
const EditPersonPage = ({ match }) => {
  return (
    <div>
      Edit person
      <Form id={match.params.id} />
    </div>
  );
};

export default EditPersonPage;
