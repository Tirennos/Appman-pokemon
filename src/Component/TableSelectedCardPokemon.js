import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Component/TableCardPokemon';
import cute from '../cute.png';

class TableCardPokemon extends Component {

    constructor() {
        super();
        this.state  = {
            happiness: [],
            hp: [],
            damage: [],
            weak: []
        };
    }

    componentWillMount() {
        const { dataList } = this.props;
        let hpObj = [];
        let damageObj = [];
        let weakObj = [];
        let happinessObj = [];

        dataList.map((data, key) => {
            hpObj.push(Number(data.hp) >= 100 ? 100/10 : data.hp/10);
            damageObj.push(Object.prototype.hasOwnProperty.call(data, 'attacks') ? data.attacks[0].damage.replace(/\D/g, '')/10 : '');
            weakObj.push(data.convertedRetreatCost * 100 >= 100 ? 100/10 : (data.convertedRetreatCost * 100)/10);
        });

        hpObj.map((hp, key) =>  {
            happinessObj.push((hp + damageObj[key] + 10  - weakObj[key])/5)
        })

        this.setState({
            happiness: happinessObj
        })

    }


    render() {
        const dataList = this.props;
        const { colors, onClickRemoveCard } = this.props;
        const { happiness } = this.state;
        let imgName = [];
        for (let i = 0; i < 4; i++)
        { imgName.push(<img style={{height: '20px'}} src={cute}></img>)}
        return(
            <div style={{overflow: 'auto', height: '600px'}}>
                <br></br>
            <table border='0' >
                <thead>
                <tr>
                </tr>
                </thead>
                <tbody style={{textAlign: 'left'}} >
                { dataList.dataList.map((data, key) => {
                    return(
                        <div className="card" key={`${key}_card`}>
                            <div className="container">
                            <tr key={key} style={{width: '100%'}}>
                                <td>
                                    <img  style={{height: '200px'}} src={data.imageUrlHiRes}/>
                                </td>
                                <td style={{verticalAlign: '-webkit-baseline-middle', width: '300px'}} >
                                    <div>{data.name}</div>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" style={{width: (data.hp >= 100 ? 100 : data.hp)}}>{'HP'}&#xa;</div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" style={{width: (data.convertedRetreatCost * 50 >= 100 ? 100 : data.convertedRetreatCost * 50)}}> {'STR'}</div>
                                    </div>
                                    <div hidden={true}>WEAK {Object.prototype.hasOwnProperty.call(data, 'weaknesses') ? `${data.weaknesses[0].type}  ${data.weaknesses[0].value}` : '0'} </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" style={{width: (data.convertedRetreatCost * 100 >= 100 ? 100 : data.convertedRetreatCost * 100)}}>{'WEAK'}</div>
                                    </div>

                                    {/*<img style={{height: '20px'}} src={cute}></img>*/}
                                    {imgName}
                                </td>
                                <td style={{verticalAlign: '-webkit-baseline-middle', textAlign: 'right', width: '550px'}} colSpan={2}>
                                    <div
                                        style={{cursor: 'pointer', color: colors.Fairy}}
                                        onClick={() => onClickRemoveCard(data.id)}
                                    >
                                        {'X'}
                                    </div>
                                </td>
                            </tr>
                            </div>
                        </div>
                    )
                })
                }
                </tbody>
            </table>
            </div>
        )
    }
}

TableCardPokemon.defaultValue = {
    dataList: [],
    colors: {}
}

TableCardPokemon.propTypes = {
    dataList: PropTypes.array,
    colors: PropTypes.object,
    onClickRemoveCard: PropTypes.func.isRequired
}


export default TableCardPokemon;
