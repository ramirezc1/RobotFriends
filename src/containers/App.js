import React from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox
          input={searchField}
          onSearchChange={onSearchChange}
        ></SearchBox>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}></CardList>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
