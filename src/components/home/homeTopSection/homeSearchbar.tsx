import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { facetFilterModel } from "../../../models/facets";

interface HomeSearchbarProps {
  filterDict: facetFilterModel[];
}

const HomeSearchbar = (props: HomeSearchbarProps) => {
  let navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = React.useState<string>("");

  const searchDatasets = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let queryString = "";
    if (searchKeyword !== "") {
      queryString = "&q=" + searchKeyword;
    }
    if (props.filterDict.length > 0) {
      let filterURI = props.filterDict
        .map((x) => x.key + ":" + x.value)
        .join(";");
      navigate("/browse?p=1" + queryString + "&f=" + filterURI);
    } else {
      navigate("/browse?p=1" + queryString);
    }
  };

  return (
    <Form className="w-75" onSubmit={(event) => searchDatasets(event)}>
      <Row>
        <Col>
          <Form.Control
            id="searchInput"
            type="text"
            placeholder="Search datasets"
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
        </Col>
        <Col className="col-3 ms-0">
          <Button
            variant="secondary"
            className="text-white shadow-md-dark"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
            &nbsp;Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default HomeSearchbar;
