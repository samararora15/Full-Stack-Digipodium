import React, { useState } from 'react'
import productdata from './dummydata'

const Productlist = () => {

  const [productarray, setproductarray] = useState(productdata);

  let brands = ['HP', 'Lenovo', 'Asus', 'Acer', 'Apple', 'Samsung']

  const searchProduct = (e) => {
    let search = e.target.value;
    
    let filteredData = productdata.filter( (product) => {return product.model.toLowerCase().includes(search.toLowerCase())} );
    setproductarray(filteredData);
  }

  const filterBrand = (e) => {
    let search = e.target.value;
    
    let filteredData = productdata.filter( (product) => {return product.brand.toLowerCase().includes(search.toLowerCase())} );
    setproductarray(filteredData);
  }

  return (
    <div>
      
      <header className='bg-dark'>
        <div className='container py-4'>
          <h1 className='text-center display-2 fw-bold text-white'>Product Listing Page</h1>
          <input onChange={searchProduct} type="text" class="form-control my-4 w-75 mx-auto"/>
        </div>

        <select onChange={filterBrand} className='form-control w-25 mt-4 mx-auto'>
          {
            brands.map( (b) => {
              return <option value={b}>{b}</option>
            } )
          }
        </select>
      </header>

      <div className='container'>

        <div className='row'>
        {
            productarray.map( (product) => { return <div className='card col-md-3 mt-2'><img className='setd' src={product.image} alt="" />
              <div className='card-body'>
                <p>{product.brand}</p>
                <h4>{product.model}</h4>
              </div>
            </div> } )
        }
        </div>
      </div>
    </div>
  )
}

export default Productlist;