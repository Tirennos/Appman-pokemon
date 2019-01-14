import React, { Component } from 'react';
import './App.css';
import cardList from './mock/cards.json';
import filter from 'lodash/filter';
import './index.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import TableCardPokemon from './Component/TableCardPokemon';
// var nocache = require('nocache');
// nocache()


const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {

    constructor() {
        super();
        this.state  = {
            dataList: [],
            dataSearch: ''
        };
    }

    componentWillMount() {
        this.setState({dataList: cardList.cards});
    }

    componentWillReceiveProps(nextProps) {
      console.log('nextProps:', nextProps);
    }

    onSearch = () => {
      const { dataSearch, dataList } = this.state;
      let objFilter = filter(dataList, (item) => {
          return item.name.indexOf(dataSearch)>-1;
        });
      if (dataSearch.length > 0) {
          this.setState({dataList: objFilter});
      } else {
          this.setState({dataList: cardList.cards});
      }
      console.log('objFilter:', objFilter);
    }

  render() {
    const { dataList } = this.state;
      return (
      <div className="App">
          <div className="col-md-12">
              <div className="row no-gutters">
                  <div className="col">
                      <input
                          className="form-control border-secondary border-right-0 rounded-0"
                          style={{marginTop: '10px'}}
                          type="search"
                          placeholder="Find Pokemon"
                          name="search_card"
                          onChange={(e) => this.setState({dataSearch: e.target.value})}>
                      </input>
                  </div>
                  <div className="col-auto">
                      <button
                          style={{marginTop: '10px'}}
                          className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                          type="button"
                          onClick={() => this.onSearch()}>
                          <i className="fa fa-search">{''}</i>
                      </button>
                  </div>
              </div>

              <TableCardPokemon
                  dataList={dataList}
              />
          </div>
        </div>
    )
  }
}

export default App
