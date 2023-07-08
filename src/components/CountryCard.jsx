import React from "react";

function CountryCard() {
  return (
    <div className="flex justify-center">
      <div className="w-80 flex-col rounded overflow-hidden shadow-md">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
          alt=""
          className="w-full"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">Germany</h2>
          <p>
            <span>Population:</span>
            81,770,900
          </p>
          <p>
            <span>Region:</span>
            Europe
          </p>
          <p>
            <span>Capital:</span>
            Berlin
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
