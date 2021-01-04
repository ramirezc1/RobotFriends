import { setSearchField } from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
} from "./types";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const intialStateSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobotsReducer(undefined, {})).toEqual(
      intialStateSearch
    );
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobotsReducer(intialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobotsReducer", () => {
  const intialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };
  it("should return the initial state", () => {
    expect(reducers.requestRobotsReducer(undefined, {})).toEqual(
      intialStateRobots
    );
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobotsReducer(intialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ isPending: true, robots: [], error: "" });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS,", () => {
    expect(
      reducers.requestRobotsReducer(intialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 123,
          name: "test",
          email: "test@gmail.com",
        },
      ],
      error: "",
    });
  });
  it("should handle REQUEST_ROBOTS_FAILED,", () => {
    expect(
      reducers.requestRobotsReducer(intialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Noooo!",
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: "Noooo!",
    });
  });
});
