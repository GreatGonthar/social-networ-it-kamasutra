import React from "react";
import Card from "../Card/Card";
import classes from "./CardList.module.css";
import { WithGlobalState } from "../hocs/WithGlobalState";

class CardListNoProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "name",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.setState({
      orderBy: e.target.value,
    });
  }
  componentDidMount() {
    console.log("componentDidMount", this.props.state.citiesList);

  }
  componentDidUpdate(preProps, preState) {
    console.log("componentDidUpdate prestate", this.props.state.citiesList, preState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount",  this.props.state.citiesList);
  }
  render() {
    let sortedCitiesList = this.props.state.citiesList.sort();
    if (this.state.orderBy === "rname") {
      sortedCitiesList.reverse();
    }
    if (this.props.state.citiesList.length > 300) {
      throw new Error("has error");
    }
   
    return (
      <>
        <select
          className={classes.select}
          value={this.state.orderBy}
          onChange={this.handleOnChange}
        >
          <option value="name">by name</option>
          <option value="rname">by revers name</option>
        </select>
        <div className={classes.cardList}>
          {sortedCitiesList.map((cityElement) => (
            <Card
              key={cityElement}
              city={cityElement}              
            />
          ))}
        </div>     
      </>
    );
  }
}

export const CardList = WithGlobalState(CardListNoProps);
