import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  SearchState,
  RobotState,
  ActionTypes,
} from "./types";

const initialStateSearch: SearchState = {
  searchField: "",
};

export const searchRobotsReducer = (
  state = initialStateSearch,
  action: ActionTypes
): SearchState => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots: RobotState = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobotsReducer = (
  state = initialStateRobots,
  action: ActionTypes
): RobotState => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
