import React from 'react';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

class App extends React.Component {
  constructor(props) {
    console.log('App.js constructor');
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
    };
    console.log(this.state);
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes })
      });
  }

  onRecipeClick = (id) => {
    console.log(id);
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        console.log('state is changing');
        this.setState({ currentRecipe: recipe })
        console.log('state has changed');
        console.log(this.state);
      });
  }

  render() {
    const { recipes, currentRecipe } = this.state;
    console.log('render App');
    return (
      <div>
        <Header />
        <main style={{ display: 'flex' }}>
          <RecipeList 
            recipes={recipes}
            style={{ flex: 3 }} 
            onClick={this.onRecipeClick}
          />
          <RecipeDetail 
            recipe={currentRecipe}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
};

export default App;