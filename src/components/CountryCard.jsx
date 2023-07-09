import React from "react";

function CountryCard({ country, darkMode }) {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="flex justify-center">
      <div className={`bg-${darkMode ? "night" : "day"}-elements w-72 md:w-80 flex-col rounded overflow-hidden shadow-md pb-6`}>
        <img
          src={flags.png}
          alt="Flag"
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="px-6 py-4">
          <h2 className={`text-${darkMode ? "night" : "day"}-text font-bold text-xl mb-2`}>{name.common}</h2>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Population:</span> {population}
          </p>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Region:</span> {region}
          </p>
          <p className={`text-${darkMode ? "night" : "day"}-text`}>
            <span>Capital:</span> {capital && capital[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
