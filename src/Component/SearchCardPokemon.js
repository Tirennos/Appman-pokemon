import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Component/TableCardPokemon';
import cardList from '../mock/cards.json';
import filter from 'lodash/filter';
import TableCardPokemon from '../Component/TableCardPokemon';


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

class SearchCardPokemon extends Component {

    constructor() {
        super();
        this.state  = {
            dataList: [],
            dataSearch: '',
            listSelectCard: []
        };
    }

    componentWillMount() {
        const { myPokedexList } = this.props;
        if (myPokedexList.length > 0){
            const items = cardList.cards;
            const items2 = myPokedexList;
            for (let i = 0; i < items.length; i++)
                for (let j = 0; j < items2.length; j++)
                if (items[i].id && items[i].id === myPokedexList[j]) {
                    items.splice(i, 1);
                }
            this.setState({dataList: items});
        } else {
           this.setState({dataList: cardList.cards});
        }
    }

    onSearch = () => {
        const { dataSearch } = this.state;
        let dataList1 = cardList.cards;
        let objFilter = filter(dataList1, (item) => {
            return item.name.indexOf(dataSearch)>-1;
        });
        if (dataSearch.length > 0) {
            this.setState({dataList: objFilter});
        } else {
            this.setState({dataList: cardList.cards});
        }
    }

    onClickAddCard = (listCard) => {
        const { onClickMyCardList } = this.props;
        const { dataList } = this.state;

        const cardId = filter(dataList, o => o.id !== listCard)

        this.setState({
            listSelectCard: this.state.listSelectCard.concat([listCard]),
            dataList: cardId
        }, () => onClickMyCardList(this.state.listSelectCard));
    }

    render() {
          const { dataList } = this.state;
        return(
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
                    colors={COLORS}
                    onClickAddCard={(data) => this.onClickAddCard(data)}
                />
            </div>
        )
    }
}

SearchCardPokemon.propTypes = {
    onClickMyCardList: PropTypes.func.isRequired,
    myPokedexList: PropTypes.array.isRequired
}

export default SearchCardPokemon;
