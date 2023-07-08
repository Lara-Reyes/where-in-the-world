import React from "react";

function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="flex justify-center">
      <div className="w-72 md:w-80 flex-col rounded overflow-hidden shadow-md pb-6">
        <img
          src={flags.png}
          alt="Flag"
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{name.common}</h2>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital && capital[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
