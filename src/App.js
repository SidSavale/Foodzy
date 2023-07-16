import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { getAreaFoodItems, getAreaList } from "./api/services/food";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [areas, setAreas] = useState([]);

  const fetchAreaList = async () => {
    const response = await getAreaList();
    if (response.data.meals && response.data.meals.length > 0) {
      setAreas(response.data.meals);
      fetchFooodItems(response.data.meals[0].strArea);
    }
  }

  const fetchFooodItems = async (area) => {
    const response = await getAreaFoodItems(area);
    setFoodItems(response.data.meals);
  }

  const handleAreaChange = async (e) => fetchFooodItems(e.target.value);

  useEffect(() => {
    fetchAreaList();
  }, [])

  return (
    <section className="container py-3">
      <div className="p-2 px-4 d-flex align-items-center justify-content-between bg-light rounded border-muted">
        <select
          onChange={handleAreaChange}
          className="p-2 px-3 border border-muted"
        >
          <option>-- list --</option>
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
        </select>
        <div className="bg-dark p-3 px-4 text-white rounded">
          {foodItems.length}
          </div>
      </div>

      <div className="row my-4">
        {foodItems.map((food) => (
          <div className="col-12 p-3 col-md-4 col-lg-3">
            <Card image={food.strMealThumb} title={food.strMeal} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
