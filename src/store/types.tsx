import { IRobot } from "../containers/App";

//state types
export interface SearchState {
  searchField: string;
}

export interface RobotState {
  isPending: boolean;
  robots: Array<IRobot>;
  error: string;
}

export type State = RobotState | SearchState;
//Actions
export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const REQUEST_ROBOTS_PENDING = "REQUEST_ROBOTS_PENDING";
export const REQUEST_ROBOTS_SUCCESS = "REQUEST_ROBOTS_SUCCESS";
export const REQUEST_ROBOTS_FAILED = "REQUEST_ROBOTS_FAILED";

interface ChangeSearchFieldAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: string;
}

interface RequestRobotsPendingAction {
  type: typeof REQUEST_ROBOTS_PENDING;
}

interface RequestRobotsSuccessAction {
  type: typeof REQUEST_ROBOTS_SUCCESS;
  payload: Array<IRobot>;
}

interface RequestRobotsFailedAction {
  type: typeof REQUEST_ROBOTS_FAILED;
  payload: string;
}

export type ActionTypes =
  | ChangeSearchFieldAction
  | RequestRobotsPendingAction
  | RequestRobotsSuccessAction
  | RequestRobotsFailedAction;
