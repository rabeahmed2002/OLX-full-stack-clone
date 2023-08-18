import React, { useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import pic1 from "../../assets/iphone.jpg"
import './style.css';


function Posts() {

  const [products, setProducts] = useState([]);


  //making a function to fetch data through API
  const fetchData = async() => { 
    const response = await fetch("https://api.escuelajs.co/api/v1/categories")
    const data = await response.json()

    setProducts(data);
    console.log(data);
  }

   useEffect(() => {
    
    fetchData();
   
  }, [])
  


  return (
    
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div> 
        <div className="cards">

          {
            products.map((item)=>{
              return (
                <>
                <div className="card" key={item.id}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">{item.price}</p>
              <span className="name">{item.name}</span>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          


         
              </>
              )
            })
          };



          
        
        </div>
      </div>
    </div>
    
  );
}

export default Posts;
