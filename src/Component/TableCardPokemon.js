import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

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
        const { happiness } = this.state;
        return(
            <div style={{overflow: 'auto', height: '650px'}} className="row col-md-12 sum-card cat">
                <br></br>
                {/*{ dataList.dataList.map((data, key) => {*/}
                    {/*return(*/}
                        {/*<div className="row">*/}
                        {/*<Card key={key}>*/}
                            {/*<img  style={{width: '200px'}} src={data.imageUrlHiRes}/>*/}
                            {/*<CardBody>*/}
                                {/*<CardTitle>Card title</CardTitle>*/}
                                {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                                {/*<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>*/}
                                {/*<Button>Button</Button>*/}
                            {/*</CardBody>*/}
                        {/*</Card>*/}
                        {/*</div>*/}
                    {/*)*/}
                {/*})*/}
                {/*}*/}

            <table border='1' >
                <thead>
                <tr>
                </tr>
                </thead>
                <tbody style={{textAlign: 'left'}} >
                { dataList.dataList.map((data, key) => {
                    return(
                        <tr key={key} style={{width: '100%'}}>
                            {/*<td>{key + 1}</td>*/}
                            <td>
                                <img  style={{height: '200px'}} src={data.imageUrlHiRes}/>
                            </td>
                            <td >
                                <div>{data.name}</div>
                                <div>HP {data.hp >= 100 ? 100 : data.hp}</div>
                                <div>STR {data.convertedRetreatCost * 50 >= 100 ? 100 : data.convertedRetreatCost * 50}</div>
                                <div hidden={true}>WEAK {Object.prototype.hasOwnProperty.call(data, 'weaknesses') ? `${data.weaknesses[0].type}  ${data.weaknesses[0].value}` : '0'} </div>
                                <div>WEAK {data.convertedRetreatCost * 100 >= 100 ? 100 : data.convertedRetreatCost * 100} </div>
                                <div>Damange {Object.prototype.hasOwnProperty.call(data, 'attacks') ? data.attacks[0].damage.replace(/\D/g, '') : ''}  </div>
                                <div>HAPPY {happiness[key]}</div>
                            </td>
                            {/*<td></td>*/}
                            {/*<td></td>*/}
                        </tr>
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
    dataList: []
}

TableCardPokemon.propTypes = {
    dataList: PropTypes.array
}


export default TableCardPokemon;
