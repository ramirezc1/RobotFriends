import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
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
};

export default App;
