import React from "react";

function CountryDetails({ country, darkMode }) {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    borders
  } = country;

  return (
    <div>
      <button>Back</button>
      <div
        className={`bg-${
          darkMode ? "night" : "day"
        }-elements w-72 md:w-80 flex-col first-letter:pb-6`}
      >
        <img
          src={flags.png}
          alt="Flag"
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="px-6 py-4">
          <h2
            className={`text-${
              darkMode ? "night" : "day"
            }-text font-bold text-xl mb-2`}
          >
            {name.common}
          </h2>
          {country.name.nativeName && (
            <p className={`text-${darkMode ? "night" : "day"}-text`}>
              <span>Native Name:</span>{" "}
              {Object.values(country.name.nativeName)[0].common}
            </p>
          )}
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Population:</span> {population}
          </p>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Region:</span> {region}
          </p>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Sub Region:</span> {subregion}
          </p>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Capital:</span> {capital && capital[0]}
          </p>
        </div>
        <div>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Top Level Domain:</span> {tld}
          </p>
          {country.currencies && (
            <p className={`text-${darkMode ? "night" : "day"}-text`}>
              <span>Currency:</span> {Object.values(country.currencies)[0].name}{" "}
              ({Object.values(country.currencies)[0].symbol})
            </p>
          )}
          {country.languages && (
            <p className={`text-${darkMode ? "night" : "day"}-text`}>
              <span>Languages:</span>{" "}
              {Object.values(country.languages).join(", ")}
            </p>
          )}
           {country.borders && (
            <p className={`text-${darkMode ? "night" : "day"}-text`}>
              <span>Borders Countries:</span>{" "}
              <button>{Object.values(country.borders).join(" ")}</button>
            </p>
          )}
        
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
