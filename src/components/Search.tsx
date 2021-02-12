import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";

interface IProps {
  cod: string;
  message: number;
  cnt: number;
  list: { dt: number };
  city: {
    name: string;
    country: string;
  };
}

const Search = (props: RouteComponentProps) => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [weathers, setWeathers] = useState<IProps[]>([]);

  const fetchForecast = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=91a5b5f2f697622e15b9a40ea3b2e981`
      );
      const weathers = response.json();
      console.log(weathers);
      console.log(weathers);
      if (response.ok) {
        //setWeathers(weathers);
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
