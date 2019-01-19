import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableSelectedCardPokemon from './TableSelectedCardPokemon'
import cardList from '../mock/cardsInitial.json';
import filter from 'lodash/filter';


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
        let obj = [];
        if (myPokedexList.length > 0){
            const items = cardList.cards;
            const items2 = myPokedexList;
            for (let i = 0; i < items.length; i++)
                for (let j = 0; j < items2.length; j++)
                    if (items[i].id && items[i].id === myPokedexList[j]) {
                        obj.push(items[i]);
                    }
            this.setState({dataList: obj});
        }

    }

    componentWillUnmount() {
        this.setState({dataList: this.state.dataList})
    }

    onClickRemoveCard = (listCard) => {
        const { onClickRemoveCard } = this.props;
        const { dataList } = this.state;
        const cardId = filter(dataList, o => o.id !== listCard)
        this.setState({dataList: cardId}, onClickRemoveCard(listCard));
    }


    render() {
        const { colors } = this.props;
        const { dataList } = this.state;

        return(
            <div className="col-md-12">
                <div style={{fontSize: '-webkit-xxx-large', textAlign: '-webkit-center'}}>My Pokedex</div>
                <TableSelectedCardPokemon
                    dataList={dataList}
                    colors={colors}
                    onClickRemoveCard={(data) => this.onClickRemoveCard(data)}
                />
            </div>
        )
    }
}
SearchCardPokemon.defaultValue = {
    myPokedexList: []
}

SearchCardPokemon.propTypes = {
    myPokedexList: PropTypes.array,
    colors: PropTypes.object.isRequired,
    onClickRemoveCard: PropTypes.func.isRequired
}

export default SearchCardPokemon;
