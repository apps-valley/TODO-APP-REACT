import { useState } from "react";
import moment from "moment";

export const capitalize = (string) => {
  const arr = string.split(" ");
  const capitalizedArr = arr.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1)
  );
  return capitalizedArr.join(" ");
};

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  console.log(values);
  return {
    values,
    handleChange: (e) => {
      values.birth =
        values.birth.trim() !== ""
          ? moment(values.birth).format("YYYY-MM-DD")
          : "";
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    setInitialValues: (initialValues) => {
      setValues({
        ...initialValues,
      });
    },
  };
};
