import React from 'react'

const RecipeDetail = (props) => (
  <div style={props.style}>
    <h2>Creepy Halloween Skull Cupcakes</h2>
    <img src="http://images.media-allrecipes.com/userphotos/650x315/4557475.jpg" />
    <div>
      <span>Dessert</span>
      <span>1200 cal</span>
    </div>
    <h3>Ingredients</h3>
    <ul>
      <li>ingredient 1</li>
      <li>ingredient 2</li>
      <li>ingredient 3</li>
      <li>ingredient 4</li>
      <li>ingredient 5</li>
      <li>ingredient 6</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li>step 1</li>
      <li>step 2</li>
      <li>step 3</li>
      <li>step 4</li>
      <li>step 5</li>
      <li>step 6</li>
      <li>step 7</li>
    </ol>
  </div>
);

export default RecipeDetail;