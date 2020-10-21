import React from "react";
import { Form } from "components";
export const EditPersonPage = ({ match }) => (
  <section className="page">
    <div className="page__description">
      <h2>Edit employee</h2>
      <p>Edit the information of your employee.</p>
    </div>
    <Form id={match.params.id} />
  </section>
);
