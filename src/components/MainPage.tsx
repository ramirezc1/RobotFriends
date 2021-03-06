import React from "react";

import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import ErrorBoundary from "./ErrorBoundary";
import { AppProps } from "../containers/App";

class MainPage extends React.Component<AppProps> {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };
  render() {
    const { onSearchChange, isPending } = this.props;

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
