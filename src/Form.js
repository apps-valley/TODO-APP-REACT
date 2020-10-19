import React from "react";

const Form = () => {
  const onSubmit = (e) => {
    // to be submitted
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" />
      <input type="submit" />
    </form>
  );
};

export default Form;
