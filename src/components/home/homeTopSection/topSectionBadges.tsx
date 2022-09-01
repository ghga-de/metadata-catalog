import { faCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChartColumn,
  faDna,
  faFile,
  faGenderless,
  faMars,
  faNotesMedical,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { metadataSummaryModel } from "../../../models/dataset";
import { getItemsForSummary } from "../../../utils/utils";

interface HomeTopBadgesProps {
  summaryStats: metadataSummaryModel | null;
}

const TopSectionBadges = (props: HomeTopBadgesProps) => {


  return (
    <>
      {props.summaryStats !== null ? (
        <>
          <Card
            style={{ width: "18rem" }}
            className="d-inline-block shadow border-muted mx-2"
          >
            <Card.Body>
              <Card.Title className="text-secondary fw-bold">
                <Row>
                  <Col style={{ fontSize: "42px" }} className="p-0 col-auto">
                    <span className="fa-layers fa-fw fa-lg ms-2">
                      <FontAwesomeIcon icon={faCircle} />
                      <FontAwesomeIcon icon={faDna} transform="shrink-6" />
                    </span>
                  </Col>
                  <Col className="mt-3 fw-bold ps-0">Protocols: {props.summaryStats.protocol_summary.count}</Col>
                </Row>
              </Card.Title>
              <Card.Text as="div">
                <Row className="pt-3 fs-7 ">
                  <Col>
                    <ul className="fa-ul">
                      {getItemsForSummary(props.summaryStats.protocol_summary.stats.protocol).map((x) => {
                        return (<li key={x} className="text-secondary text-capitalize fw-bold ms-0 ps-0 mb-2"><FontAwesomeIcon className="fa-li" transform="grow-3" icon={faNotesMedical} />{x}</li>)
                      })}
                    </ul>
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
                  <Col style={{ fontSize: "42px" }} className="p-0 col-auto">
                    <span className="fa-layers fa-fw fa-lg ms-2">
                      <FontAwesomeIcon icon={faCircle} />
                      <FontAwesomeIcon icon={faUser} transform="shrink-6" />
                    </span>
                  </Col>
                  <Col className="mt-3 fw-bold ps-0">Individuals: {props.summaryStats.individual_summary.count}</Col>
                </Row>
              </Card.Title>
              <Card.Text as="div" className="fs-7">
                <Row className="pt-3">
                  <Col className="text-center">
                    <FontAwesomeIcon icon={faVenus} className="fs-4" />
                    <br />
                    Female: {props.summaryStats.individual_summary.stats.sex['female']}
                  </Col>
                  <Col className="text-center">
                    <FontAwesomeIcon icon={faMars} className="fs-4" />
                    <br />
                    Male: {props.summaryStats.individual_summary.stats.sex['male']}
                  </Col>
                </Row>
                <Row className="mt-3">
                  <FontAwesomeIcon icon={faGenderless} className="fs-4" />
                  <br />
                  <Col className="text-center">Unknown: {props.summaryStats.individual_summary.stats.sex['unknown'] ? props.summaryStats.individual_summary.stats.sex['unknown'] : 0}</Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            className="d-inline-block shadow border-muted mx-2"
          >
            <Card.Body>
              <Card.Title className="text-secondary fw-bold">
                <Row>
                  <Col style={{ fontSize: "42px" }} className="p-0 col-auto">
                    <span className="fa-layers fa-fw fa-lg ms-2">
                      <FontAwesomeIcon icon={faCircle} />
                      <FontAwesomeIcon icon={faChartColumn} transform="shrink-6" />
                    </span>
                  </Col>
                  <Col className="mt-3 ps-0">Files: {props.summaryStats.file_summary.count}</Col>
                </Row>
              </Card.Title>
              <Card.Text as="div">
                <Row className="mt-4 pt-3 fs-7 align-items-center">
                  <Col>
                    <ul className="fa-ul">
                      {getItemsForSummary(props.summaryStats.file_summary.stats.format).map((x) => {
                        return (<li key={x} className="text-secondary text-capitalize fw-bold ms-0 ps-0 mb-2"><FontAwesomeIcon className="fa-li" transform="grow-3" icon={faFile}/>{x}</li>)
                      })}
                    </ul>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TopSectionBadges;
