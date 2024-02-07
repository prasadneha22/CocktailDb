import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Details.css'

function DrinkDetails() {
  const { name } = useParams();
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [ingrediants, setIngrediants] = useState([]);
  const [measures,setMeasures] = useState([])
  console.log(drinkDetails);

  useEffect(() => {
    const fetchDrinkDetails = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        
        if (response.data.drinks) {
          setDrinkDetails(response.data.drinks[0]);
          const {strIngredient1,strIngredient2,strIngredient3,strIngredient4} = response.data.drinks[0]
          const ing = [strIngredient1,strIngredient2,strIngredient3,strIngredient4]
          const {strMeasure1,strMeasure2,strMeasure3,strMeasure4}  = response.data.drinks[0]
          const measurment  = [strMeasure1,strMeasure2,strMeasure3,strMeasure4]
          
          
          setIngrediants(ing);
          setMeasures(measurment)
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchDrinkDetails();
  }, [name]);

  if (!drinkDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-conatiner">
      <div className="main">
        <div className="name-img">
            <h2>{drinkDetails.strDrink}</h2>
            <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strImageAttribution} />
        </div>
      
        <div className="ingrediants">
          <div className="items">

          
            <h3>Ingrediants</h3>
            {
                ingrediants && ingrediants.map((item,i)=> item &&
                <div key={i} className="measures">
                  <img  src= {`https://www.thecocktaildb.com/images/ingredients/${item}-medium.png`} alt="image" />
                    
                  <p>{item}</p>
                
                </div>
                )
            }
            </div>
            <div className="mes">
             
            {
                measures.map((item,i)=>
                <p key={i}>{item}</p>
                )
            }
            </div>
            </div>
        </div>
        <div className="instructions">
            <h2>Instructions</h2>
            <p>{drinkDetails.strInstructions}</p>
        </div>
        <div className="glass">
            <h2>Glass</h2>
            <p>{drinkDetails.strGlass}</p>
        </div>
    </div>
  );
}

export default DrinkDetails;
