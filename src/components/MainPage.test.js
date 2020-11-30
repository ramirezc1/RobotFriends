import { shallow } from "enzyme";
import React from "react";

import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

// it("renders Main page with out crashing", () => {
//   expect(wrapper).toMatchSnapshot();
// });

//183 udemy
it("it filters robots correctly", () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
});
