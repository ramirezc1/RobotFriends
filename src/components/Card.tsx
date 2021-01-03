import React from "react";
import { IRobot } from "../containers/App";
import "./Card.css";

const Card:React.FunctionComponent<IRobot> = ({ id, name, email }) => {
  return (
    <div className="tc card dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?size=250x250`}
        className="card-img"
        alt=""
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
