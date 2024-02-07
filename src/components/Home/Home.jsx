import { useState,useEffect } from "react";
import SearchDrink from "./SearchDrink";
import axios from "axios";
import './Home.css'


function Home() {
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("a");

  const fetchSearch = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`);
      setdata(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSearch();
 
  }, [])
  

  return (
    <div className="main-container">
      <h1>Search drinks with the first letter</h1>
      <div className="input-container">
      <input
        type="text"
        value={value}
        placeholder="search here.."
        onChange={(e) => setvalue(e.target.value)}
      />
      <button onClick={fetchSearch}>Search</button>
      </div>
      
      <div className="results">
        {data &&
          data.drinks?.map((item, index) => (
            <div className="records"  key={index}>
                <SearchDrink
              key={index}
              image={item.strDrinkThumb}
              name={item.strDrink}
            />
            
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
