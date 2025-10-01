const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setselectedDay}) => {
    return <div>
        <div>
            <h1>Идеи Плана Питания</h1>
            <button className="button-add" onClick={addMeal}>Добавить</button>
        </div>
        <div>
            {mealPlans.map(({id, title, mealForADay}) => (
                <div className={`meal ${id === selectedDay ? "selected" : "default"}`}
                onClick={() => setselectedDay(id)}
                >
                    <p className="field">{title}</p>
                    <p className="field">{mealForADay.substring(0, 60)}</p>
                    <button className="button-delete" onClick={() => deleteDay(id)}>Удалить</button>
                </div>
            ))}
        </div>
    </div>
}

export default MyList;
