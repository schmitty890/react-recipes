import React from 'react'

const RecipeList = (props) => (
  <div style={props.style}>
    <h2>Some recipes</h2>
    <ul>
      <li>
        <span>Creepy Halloween Skull Cupcakes</span>
        <span>Dessert</span>
      </li>
      <li>
        <span>Blueberry sour cream coffee cakes</span>
        <span>Dessert</span>
      </li>
      <li>
        <span>Amazing pork tenderloin in the slow cooker</span>
        <span>Meat</span>
      </li>
    </ul>
  </div>
);

export default RecipeList;