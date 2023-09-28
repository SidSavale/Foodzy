import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Navbar } from '../components/Navbar'
import { Card } from '../components';
import { getFoodCategories } from '../api/services'

export const Category = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    setLoading(true);
    const response = await getFoodCategories();
    setCategories(response.data.categories);
    setLoading(false);
  }

  // if d_array - []; callback is only called once at the time of birth of component..
  useEffect(() => {
    fetchCategory();
  }, [])
  
  if(loading){
    return (
      <div className='d-flex vh-100 bg-muted align-items-center justify-content-center'>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <>
     <Navbar/>
    <div className='container py-5'>
      <div className='row'>
        {
          categories.length > 0 && categories.map(category => {
            return (
              <div key={category.idCategory} className='col-12 p-3 col-md-4 col-lg-3'>
                <Link to={`/${category.strCategory}`} >
                  <Card img={category.strCategoryThumb} title={category.strCategory} />
                </Link>
              </div>
            )
          })
        }

        {
          categories.length === 0 && (
            <div className='container text-white rounded text-center p-5 bg-dark'>
              <h2>No categories found.</h2>
            </div>
          )
        }
      </div>
    </div>
    </>

  )
}
