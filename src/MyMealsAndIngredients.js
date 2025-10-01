const MyMealsAndIngredients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }
   
    if(!selectedDay) return <p>Планируйте свою неделю заранее!</p>
    return <div className="whole-plan">

            <input
            type="text"
            className="myInput"
            placeholder="Укажите дату..."
            id="title"
            value={selectedDay.title}
            onChange = {(e) => editMyMeal("title", e.target.value)}
            />

            <textarea
            placeholder="Напишите здесь свой план питания..."
            id="mealForADay"
            value={selectedDay.mealForADay}
            onChange = {(e) => editMyMeal("mealForADay", e.target.value)}
            />

            <textarea
            placeholder="Список ингредиентов..."
            id="mealForADay"
            value={selectedDay.ingredients}
            onChange = {(e) => editMyMeal("ingredients", e.target.value)}
            />
        </div>
}

export default MyMealsAndIngredients;
