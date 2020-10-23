import React from "react";
import countries from "./countries";

const Options = ({ currentPerson }) => {
  const defaultValue = countries[0].label;

  const preselectedOption = (
    <option>{currentPerson.country || defaultValue}</option>
  );
  const optionCountries = countries.map((country, key) => {
    if (currentPerson.country !== undefined) {
      if (currentPerson.country !== country.label) {
        return (
          <option key={key} value={country.label}>
            {country.label}
          </option>
        );
      }
    } else if (defaultValue !== country.label) {
      return (
        <option key={key} value={country.label}>
          {country.label}
        </option>
      );
    }
  });

  const markup = (
    <>
      {preselectedOption}
      {optionCountries}
    </>
  );

  return markup;
};

export default Options;
