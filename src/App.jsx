import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DropDownMenu from "./components/DropDownMenu";
import CountryCard from "./components/CountryCard";

function App() {
  return (
    <div className="bg-day-lightBackground">
      <Header />
      <SearchBar />
      <DropDownMenu />
      <CountryCard/>
    </div>
  );
}

export default App;
