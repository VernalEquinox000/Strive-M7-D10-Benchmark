import { title } from "process";
import react from "react";
import { Jumbotron } from "react-bootstrap";

interface Props {
  title: string;
}

const UpperPart = ({ title }: Props) => {
  return (
    <Jumbotron>
      <h1>{title}</h1>
    </Jumbotron>
  );
};

export default UpperPart;
