import React from "react";
import { connect } from "react-redux";
import "./App.css";

import { requestRobots, setSearchField } from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = (state:any) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch:any) => ({
  onSearchChange: (event:React.SyntheticEvent<HTMLInputElement>):void => dispatch(setSearchField(event.currentTarget.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export interface IRobot{
  name:string,
  id:number,
  email:string,
}

export interface IRobotState{
  searchField: string
  robots: IRobot,
  isPending: boolean,
  error: string,
}

interface IRobotProps{
  onRequestRobots?:void
}

class App extends React.Component<IRobotProps, IRobot> {
  componentDidMount():void {
    this.props.onRequestRobots();
  }
  render():JSX.Element{

    return <MainPage {...this.props}></MainPage>
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
