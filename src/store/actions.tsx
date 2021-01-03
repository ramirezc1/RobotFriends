import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
  ActionTypes,
} from "./types";
import { Dispatch } from "redux";
import { IRobot } from "../containers/App";

export const setSearchField = (text: string): ActionTypes => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      users.map((user: any) => {
        return { name: user.name, id: user.id, email: user.email };
      })
    )
    .then((filteredUsers: Array<IRobot>) =>
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: filteredUsers })
    )
    .catch((error: string) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
