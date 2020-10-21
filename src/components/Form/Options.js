import React from "react";
import countries from "./countries";

const Options = () =>
  countries.map((country, key) =>
    country.selected ? (
      <option value="" disabled defaultValue key={key}>
        {country.label}
      </option>
    ) : (
      <option key={key} value={country.value} key={key}>
        {country.label}
      </option>
    )
  );

export default Options;
