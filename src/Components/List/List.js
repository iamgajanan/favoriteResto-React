import React from 'react';
import Resto from '../../RestoList.json';
import '../List/List.css'
function List() {
    
    return (
    //   <div className="List">
    //       {Resto.map((item) => { 
    //       return <div>
    //           {/* <h1>{item.image}</h1> */}
    //           <div className="image">
    //               <h1>{item.name}</h1>
    //           <h1><img src={item.image}/> </h1>
    //           <h4>Favorite Dish: {item.dishName}</h4>
    //           <h4>Location: {item.location}</h4>
    //           </div>
    //           </div>})}
    //   </div>
<div className="List">
    {Resto.map((item) => { return(
        <div className="pre-card">
    <h1>{item.name}</h1>
    <div className="flip-card">
     <div className="flip-card-inner">
      <div className="flip-card-front">
      <img className="img" src={item.image} alt="Avatar" />
      </div>
        <div className="flip-card-back">
            <h4>Location: {item.location}</h4> 
            <h4>Fav Dish: {item.dishName}</h4>
        </div>
     </div>
     </div>
     <div>

    <h3><button>Add To cart: <img src="https://img.icons8.com/fluent/30/000000/fast-cart.png"/></button></h3>
    </div>
    </div>)})}
    </div>
    );
  }

export default List;
  