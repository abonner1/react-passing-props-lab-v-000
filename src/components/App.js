import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

    this.fetchFilters = this.fetchFilters.bind(this)
    this.fetchFruit = this.fetchFruit.bind(this)
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilter = (e) => {
    console.log("new filter: ", e.target.value)
    this.setState({ currentFilter: e.target.value })
  }

  render() {
    return <FruitBasket
      fruit={this.state.fruit}
      filters={this.state.filters}
      currentFilter={this.state.currentFilter}
      updateFilterCallback={this.updateFilter}/>
  }
}

export default App;
