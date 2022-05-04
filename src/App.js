import React from "react";
import { models } from "./models.js";
import BandList from "./components/terrminator/band-list/band-list.component";
import SearchBox from "./components/terrminator/searchbox/searchbox.component.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      models: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    this.setState({ models: models });
  }

  render() {
    const filteredBands = this.state.models.filter((model) => {
      return model.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1" style={{ color: `white` }}>
          Előadók
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <BandList models={filteredBands} />
      </div>
    );
  }
}

export default App;
