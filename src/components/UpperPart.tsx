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
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
    </Jumbotron>
  );
};

export default UpperPart;
