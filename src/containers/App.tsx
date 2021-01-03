import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import "./App.css";

import { requestRobots, setSearchField } from "../store/actions";
import MainPage from "../components/MainPage";
import { RootState } from "../index";
import { ActionTypes } from "../store/types";

const mapStateToProps = (state: RootState) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, ActionTypes>
) => ({
  onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
    dispatch(setSearchField(event.currentTarget.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class App extends React.Component<AppProps> {
  componentDidMount(): void {
    this.props.onRequestRobots();
  }
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
