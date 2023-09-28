import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components';

import { filterFoodItems } from '../api/services';

export const FoodItems = () => {
  const { category_name } = useParams();
  const [loading, setLoading] = useState(false);
  const [foodItems, setFoodItems] = useState([]);

  // when component loads, we should fetch related food items!!
  const fetchFoodItems = async () => {
    setLoading(true);
    const response = await filterFoodItems(category_name);
    if(response.data.meals){
      setFoodItems(response.data.meals)
    }
    setLoading(false);
  }

  useEffect(()=> {
    fetchFoodItems()
  }, [])

  if(loading){
    return (
      <div className='d-flex vh-100 bg-muted align-items-center justify-content-center'>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className='container py-5'>
      <div className='row'>
        {
          foodItems.length > 0 && foodItems.map(category => {
            return (
              <div key={category.idMeal} className='col-12 p-3 col-md-4 col-lg-3'>
                <Card img={category.strMealThumb} title={category.strMeal} />
              </div>
            )
          })
        }

        {
          foodItems.length === 0 && (
            <div className='container text-white rounded text-center p-5 bg-dark'>
              <h2>No categories found.</h2>
            </div>
          )
        }
      </div>
    </div>
  )
}
