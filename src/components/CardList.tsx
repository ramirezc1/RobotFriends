import React from "react";
import { IRobot } from "../containers/App";
import Card from "./Card";

type Props = {
  robots: Array<IRobot>;
};
const CardList: React.FunctionComponent<Props> = ({
  robots,
}: {
  robots: Array<IRobot>;
}) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
