import React, { useState, useEffect } from "react";
import {
  Container,
  InputGroup,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { IWeather, Clouds, Main, Weather } from "../types/interfaces";

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
  const [cityResult, setCityResult] = useState<string>("Rome");
  const [stateResult, setStateResult] = useState<string | "">("Italy");
  const [codeResult, setCodeResult] = useState<string | "">("00100");
  const [weathers, setWeathers] = useState<IWeather | null>(null);
  const [clouds, setClouds] = useState<Clouds | null>(null);
  const [temperature, setTemperature] = useState<Main | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);

  const fetchForecast = async (city: string, state?: string, code?: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?q=${city},${state},${code}&appid=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.json();
      setWeathers(data);

      let clouds = data.clouds;
      setClouds(clouds);

      let temperature = data.temperature;
      setTemperature(temperature);

      let weather = data.weather;
      setWeather(weather);

      setCityResult("");
      setStateResult("");
      setCodeResult("");

      console.log(weathers);
    } catch (error) {
      console.log(error);
    }
  };

  /*const cityHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCityResult(e.currentTarget.value);
  };

  const stateHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setStateResult(e.currentTarget.value);
  };

  const codeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCodeResult(e.currentTarget.value);
  };

  const Search = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    let puppa = fetchForecast;
  }; */

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <Form>
            <Form.Group as={Row} controlId="formHorizontalCity">
              <Form.Label column sm={2}>
                City
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  placeholder="City"
                  value={cityResult}
                  onChange={(e) => setCityResult(e.currentTarget.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                State
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  placeholder="State"
                  value={stateResult}
                  onChange={(e) => setStateResult(e.currentTarget.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Post Code
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  placeholder="Post code"
                  value={codeResult}
                  onChange={(e) => setCodeResult(e.currentTarget.value)}
                />
              </Col>
            </Form.Group>
            <Button
              variant="outline-light"
              onClick={(e) =>
                fetchForecast(cityResult, stateResult, codeResult)
              }
            >
              Search
            </Button>
          </Form>

          {/* <InputGroup className="my-3 w-50">
            <Form inline>
              <FormControl
                placeholder="Search for a city..."
                aria-label="Search for a city..."
                aria-describedby="basic-addon2"
                value={cityResult}
                onChange={(e) => setCityResult(e.currentTarget.value)}
              />
              <FormControl
                placeholder="Search for a state..."
                aria-label="Search for a state..."
                aria-describedby="basic-addon2"
                value={stateResult}
                onChange={(e) => setStateResult(e.currentTarget.value)}
              />
              <FormControl
                placeholder="Search for a postcode..."
                aria-label="Search for a postcode..."
                aria-describedby="basic-addon2"
                value={codeResult}
                onChange={(e) => setCodeResult(e.currentTarget.value)}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-light"
                  onClick={(e) =>
                    fetchForecast(cityResult, stateResult, codeResult)
                  }
                >
                  Search
                </Button>
              </InputGroup.Append>
            </Form>
          </InputGroup> */}
        </div>

        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>{weathers && weathers.name}</Card.Text>
                <p>{clouds && clouds.all}</p>
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
