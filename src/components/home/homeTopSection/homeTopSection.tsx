import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getMetadataSummary, querySearchService } from "../../../api/browse";
import {
  metadataSummaryModel,
  searchResponseModel,
} from "../../../models/dataset";
import { facetFilterModel, facetModel } from "../../../models/facets";
import HomeFilterSelects from "./homeFilterSelects";
import HomeSearchbar from "./homeSearchbar";
import TopSectionBadges from "./homeTopSectionBadges";
import bundeslaender from "../../../assets/homepage/Bundeslaender.svg";
import { NavLink } from "react-router-dom";

const HomeTopSection = () => {
  const [searchResults, setSearchResults] =
    React.useState<searchResponseModel | null>(null);
  const [summary, setSummary] = React.useState<metadataSummaryModel | null>(
    null
  );

  const [filterDict, setFilterDict] = React.useState<facetFilterModel[]>([]);

  React.useEffect(() => {
    const getData = () => {
      querySearchService(setSearchResults, [], "", 0, 1, "Dataset");
      getMetadataSummary(setSummary);
    };
    getData();
  }, []);

  var facetList: facetModel[] | null = null;
  var dsCount: number = 0;

  if (searchResults !== null) {
    if (searchResults.hits.length > 0 || searchResults.count === -1) {
      facetList = searchResults.facets;
      dsCount = searchResults.count;
    } else {
      facetList = [];
      dsCount = 0;
    }
  }

  return (
    <Col className="px-2">
      <Row
        className="w-100 bg-primary rounded mx-0 mb-3 pt-5 pb-5 pe-4 text-white"
        style={{
          backgroundImage: `url(${bundeslaender})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "450px",
          backgroundPosition: "left 50px bottom -245px",
        }}
      >
        <Col className="col-3">
          <Row className="ps-4 mb-4">
            <h3 className="fw-bold">GHGA Metadata Catalog</h3>
          </Row>
          <Row>
            <div
              className="border border-black border-2 p-0 ms-3 py-5 px-5 fw-bold text-center"
              style={{ background: "RGBA(0,0,0,0.3)", borderRadius: "15px" }}
            >
              <p className="mb-4">
                A FAIR Portal for Human Genomics data with GDPR-compliant access
                control.
              </p>
              <NavLink to="/browse">
                <Button
                  variant="white"
                  className="py-2 mb-2 text-secondary fw-bold shadow-md-dark border-secondary"
                >
                  <span className="text-uppercase">Get started</span>
                </Button>
              </NavLink>
            </div>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            <HomeSearchbar filterDict={filterDict} />
          </Row>
          <Row className="mb-4 mt-2 justify-content-center">
            <HomeFilterSelects
              filterDict={filterDict}
              facetList={facetList}
              setFilterDict={setFilterDict}
            />
          </Row>
          <Row className="mb-4 justify-content-center">
            <Container className="col-3 text-center">
              <NavLink to="/browse">
                <Button
                  variant="white"
                  className="shadow-md-dark fs-5 fw-bold px-5"
                >
                  {dsCount}&nbsp;Total&nbsp;Datasets
                </Button>
              </NavLink>
            </Container>
          </Row>
          <Row className="text-black justify-content-center">
            <TopSectionBadges summaryStats={summary} />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default HomeTopSection;
