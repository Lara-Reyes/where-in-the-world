import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DropDownMenu from "./components/DropDownMenu";
import CountryCard from "./components/CountryCard";

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedData = response.data.sort((a, b) => {
          const countryA = a.name.common.toUpperCase();
          const countryB = b.name.common.toUpperCase();
          if (countryA < countryB) {
            return -1;
          }
          if (countryA > countryB) {
            return 1;
          }
          return 0;
        });
        setCountryData(sortedData);
      } catch (error) {
        console.error("Error retrieving country data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-day-lightBackground">
      <Header />
      <SearchBar />
      <DropDownMenu />
      <div className="flex flex-wrap justify-center gap-10">
        {countryData.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
