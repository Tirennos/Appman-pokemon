import React, { Component } from 'react';
import './App.css';
import './index.css';
import './Component/css/TableCardPokemon.css';
import SearchCardPokemon from './Component/SearchCardPokemon';
import MyList from './Component/MyList';

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
            isSelectCard: true,
            isMyList: false,
            myPokedexList: [],
            selectedCardList: []
        };
    }

    onClickMyCardList = (data) => {
        this.setState({
            myPokedexList: data,
            selectedCardList: [...this.state.selectedCardList, data[data.length - 1]],
        });
    }

    onClickRemoveCard = (data) => {
        const { selectedCardList } = this.state;
        let objList = selectedCardList;
        selectedCardList.map((data1, key) => {
            if (data1 === data){
                objList.splice(key, 1);
            }
        })
        this.setState({selectedCardList: objList, myPokedexList: objList})
    }

    render() {
        const { isSelectCard, isMyList, myPokedexList, selectedCardList } = this.state;
        return(
            <div>
                <div>
                    <button className="btn btn-primary" onClick={() => this.setState({isSelectCard: true, isMyList: false})}>Select Card</button>
                    <button className="btn btn-warning" onClick={() => this.setState({isSelectCard: false, isMyList: true})}>My List</button>
                </div>
                {isSelectCard &&
                     <SearchCardPokemon
                         onClickMyCardList={(data) => this.onClickMyCardList(data)}
                         myPokedexList={myPokedexList}
                     />
                }
                {isMyList &&
                    <MyList
                        myPokedexList={selectedCardList}
                        colors={COLORS}
                        onClickRemoveCard={(data) => this.onClickRemoveCard(data)}
                    />
                }
            </div>
        )
    }
}

export default App
