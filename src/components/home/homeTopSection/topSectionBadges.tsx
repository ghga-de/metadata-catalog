import { faCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChartColumn,
  faDna,
  faGenderless,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const TopSectionBadges = () => {
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="d-inline-block shadow border-muted mx-2"
      >
        <Card.Body>
          <Card.Title className="text-secondary fw-bold mt-3">
            Technology
          </Card.Title>
          <Card.Text as="div">
            <Row className="fs-8">
              <Col>Exome sequencing: ZZZ</Col>
              <Col>WGS: ZZZ</Col>
            </Row>
            <Row>
              <Col className="text-secondary mt-4" style={{ fontSize: "72px" }}>
                <span className="fa-layers fa-fw fa-lg ms-2">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faDna} transform="shrink-6" />
                </span>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="d-inline-block shadow border-muted mx-2 bg-primary"
      >
        <Card.Body className="text-white">
          <Card.Title>
            <Row>
              <Col style={{ fontSize: "48px" }} className="p-0 col-auto">
                <span className="fa-layers fa-fw fa-lg ms-2">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faUser} transform="shrink-6" />
                </span>
              </Col>
              <Col className="mt-3 fw-bold ps-0">Sex</Col>
            </Row>
          </Card.Title>
          <Card.Text as="div" className="fs-8">
            <Row className="pt-3">
              <Col className="text-center">
                <FontAwesomeIcon icon={faVenus} className="fs-4" />
                <br />
                Female: ZZZ
              </Col>
              <Col className="text-center">
                <FontAwesomeIcon icon={faMars} className="fs-4" />
                <br />
                Male: ZZZ
              </Col>
            </Row>
            <Row className="mt-3">
              <FontAwesomeIcon icon={faGenderless} className="fs-4" />
              <br />
              <Col className="text-center">Unknown: ZZZ</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="d-inline-block shadow border-muted mx-2"
      >
        <Card.Body>
          <Card.Title className="text-secondary fw-bold mt-3">
            File Format
          </Card.Title>
          <Card.Text as="div">
            <Row className="mt-4 pt-3 fs-8 align-items-center">
              <Col
                style={{ fontSize: "72px" }}
                className="p-0 col-auto text-secondary"
              >
                <span className="fa-layers fa-fw fa-lg ms-2">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon icon={faChartColumn} transform="shrink-6" />
                </span>
              </Col>
              <Col>
                <p>BAM: ZZZ</p>
                <p>FASTQ: ZZZ</p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TopSectionBadges;
