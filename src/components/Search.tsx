import React, { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { IWeather } from "../types/interfaces";

/* interface WeatherAPI {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };

  name: string;
}
 */
const Search = (props: RouteComponentProps) => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [weathers, setWeathers] = useState<IWeather | null>(null);

  const fetchForecast = async (query: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?q=${query}&appid=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.json();
      console.log(data);
      setWeathers(data);
      setSearchResult("");

      console.log(weathers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <InputGroup className="my-3 w-50">
            <FormControl
              placeholder="Search for a city..."
              aria-label="Search for a city..."
              aria-describedby="basic-addon2"
              value={searchResult}
              onChange={(e) => setSearchResult(e.currentTarget.value)}
            />
            <InputGroup.Append>
              <Button
                variant="outline-light"
                onClick={() => fetchForecast(searchResult)}
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>{weathers && weathers.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Button
        variant="primary"
        onClick={() => {
          fetchForecast(searchResult);
        }}
      >
        Primary
      </Button>{" "} */}
    </div>
  );
};

export default Search;
