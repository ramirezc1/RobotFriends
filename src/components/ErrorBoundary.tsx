import React, { Component } from "react";

interface IProps {
}

interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error:never, info:any) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1> Oooops. That is not good</h1>;
    }
    return this.props.children;
  }
}
