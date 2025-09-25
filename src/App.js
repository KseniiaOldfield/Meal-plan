import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import uuid from 'react-uuid';

function App() {
  const [mealPlans, setMealPlans] = useState([])
  const addMeal = () => {
    const newMeal = {
      title:"Today is...",
      id: uuid()
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log (newMeal)
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }
  return (
    <div className="App">
      <MyList mealPlans={mealPlans} addMeal={addMeal} deleteDay={deleteDay}/>
      <MyMealsAndIngredients/>

    </div>
  );
}

export default App;
