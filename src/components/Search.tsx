import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";

/*interface  IProps {
  cod: string;
  message: number;
  cnt: number;
  list: { dt: number };
  city: {
    name: string;
    country: string;
  };
} */

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

const Search = (props: RouteComponentProps) => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [weathers, setWeathers] = useState<WeatherData>();

  const fetchForecast = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.API_KEY}`
      );
      const weathers = response.json();
      console.log(weathers);
      if (response.ok) {
        setWeathers(weathers);
        setSearchResult("");
      } else {
        alert("Something went wrong!");
      }
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
          {/* {weather.map((w, index) => (
            <p key={`w${index}`}></p>
          ))} */}
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
