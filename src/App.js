import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {
  const [mealPlans, setMealPlans] = useState([])
  const addMeal = () => {
    const newMeal = {
      title:"Today is...",
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log (newMeal)
  }
  return (
    <div className="App">
      <MyList mealPlans={mealPlans} addMeal={addMeal}/>
      <MyMealsAndIngredients/>

    </div>
  );
}

export default App;
