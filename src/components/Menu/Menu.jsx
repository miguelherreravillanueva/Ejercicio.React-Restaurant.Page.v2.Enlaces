import React from 'react';

const Menu = (props) => {
    const dishesList = props.dishes.map((dish) => {
      return (
        <div>
          <p><i>Take a look at our menu</i></p>
          <div>
          Dish:<h4>{dish.name}</h4>
            Description: <h4>{dish.description}</h4>
            Price: <h4>{dish.price}</h4>
          </div>
          <hr/>        
        </div>
      );
    });
    return (
      <div>
        <p>{dishesList}</p>
      </div>
    );
  };
  
  export default Menu;