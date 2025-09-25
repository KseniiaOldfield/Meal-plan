const MyList = ({mealPlans, addMeal, deleteDay}) => {
    return <div>
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>Add</button>
        </div>
        <div>
            {mealPlans.map(({id, title}) => (
                <div>
                    <p>{title}</p>
                    <button className="button-delite" onClick={() => deleteDay(id)}>Delite</button>
                </div>
            ))}
        </div>
    </div>
}

export default MyList;
