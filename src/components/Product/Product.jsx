import React, { useEffect, useState } from 'react'
import './Product.css'
import axios from 'axios'

const API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot'

function Product() {
    const [data ,setData] = useState([])
    async function getService () {
     const res = await axios.get(API)
     console.log(res.data.drinks)
     setData(res.data.drinks)


    }

    useEffect(()=>{
        getService()
    },[])
  return (
    <section style={{marginTop:"50px"}}>
        <div className='container blocks'>

      
            {
                data.map((item) => (
                    <div className="block">
                    <div className="block-image">
                        <img src={item.strDrinkThumb} alt="" />
                    </div>
                    <h1>{item.strDrink}</h1>
                    <button>v korzinu</button>
    
                </div>
                ))
            }
        </div>
     
    </section>
  )
}

export default Product

  