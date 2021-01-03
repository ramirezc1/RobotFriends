import React from "react";

import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import ErrorBoundary from "./ErrorBoundary";
export interface IRobot{
  name:string,
  id:number,
  email:string,
}

interface IRobotProps{
  onRequestRobots?:void
  onSearchChange?:void
}
class MainPage extends React.Component <IRobotProps, IRobot> {
  componentDidMount() {
    // this.props.onRequestRobots();
  }
  filterRobots = () => {
    // return this.props.robots.filter((robot) => {
    //   return robot.name
    //     .toLowerCase()
    //     .includes(this.props.searchField.toLowerCase());
    // });
  };
  render() {
    const { onSearchChange:any, isPending:any } = this.props;

    return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox onSearchChange={onSearchChange}></SearchBox>
        <Scroll>
          {isPending ? (
            <h1>Loading...</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={this.filterRobots()}></CardList>
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
