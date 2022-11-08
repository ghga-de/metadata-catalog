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
            style={{ width: "18rem", borderRadius: "15px" }}
            className="d-inline-block shadow border-muted mx-2 p-1"
          >
            <Card.Body>
              <Card.Title className="text-secondary fw-bold">
                <Row className="align-items-center">
                  <Col style={{ fontSize: "36px" }} className="p-0 col-auto">
                    <span className="fa-layers fa-fw fa-lg ms-2">
                      <FontAwesomeIcon icon={faCircle} />
                      <FontAwesomeIcon icon={faDna} transform="shrink-8" />
                    </span>
                  </Col>
                  {/*<Col className="mt-3 fw-bold fs-6 ps-0">Protocols: {props.summaryStats.protocol_summary.count}</Col>*/}
                  <Col className="ms-1 fw-bold fs-5 ps-0">Platforms:&nbsp;{Object.keys(props.summaryStats.protocol_summary.stats.protocol).length}</Col>
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
            style={{ width: "18rem", borderRadius: "15px" }}
            className="d-inline-block shadow border-muted mx-2 bg-primary p-1"
          >
            <Card.Body className="text-white fw-bold">
              <Card.Title>
                <Row className="align-items-center">
                  <Col style={{ fontSize: "36px" }} className="p-0 col-auto">
                    <span className="fa-layers fa-fw fa-lg ms-2">
                      <FontAwesomeIcon icon={faCircle} />
                      <FontAwesomeIcon icon={faUser} transform="shrink-8" />
                    </span>
                  </Col>
                  <Col className="ms-1 fw-bold fs-5 ps-0">Individuals:&nbsp;{props.summaryStats.individual_summary.count}</Col>
                </Row>
              </Card.Title>
              <Card.Text as="div" className="fs-7">
                <Row className="pt-3">
                  <Col className="text-center">
                    <FontAwesomeIcon icon={faVenus} className="fs-4" />
                    <br />
                    Female:&nbsp;{props.summaryStats.individual_summary.stats.sex['female']}
                  </Col>
                  <Col className="text-center">
                    <FontAwesomeIcon icon={faMars} className="fs-4" />
                    <br />
                    Male:&nbsp;{props.summaryStats.individual_summary.stats.sex['male']}
                  </Col>
                </Row>
                <Row className="mt-3">
                  <FontAwesomeIcon icon={faGenderless} className="fs-4" />
                  <br />
                  <Col className="text-center">Unknown:&nbsp;{props.summaryStats.individual_summary.stats.sex['unknown'] ? props.summaryStats.individual_summary.stats.sex['unknown'] : 0}</Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem", borderRadius: "15px" }}
            className="d-inline-block shadow border-muted mx-2 p-1"
          >
            <Card.Body>
              <Card.Title className="text-secondary fw-bold">
                <Row className="align-items-center">
                  <Col style={{ fontSize: "36px" }} className="p-0 col-auto">
                    <span className="fa-layers fa-fw fa-lg ms-2">
                      <FontAwesomeIcon icon={faCircle} />
                      <FontAwesomeIcon icon={faChartColumn} transform="shrink-8" />
                    </span>
                  </Col>
                  <Col className="ms-1 ps-0 fs-5">Files:&nbsp;{props.summaryStats.file_summary.count}</Col>
                </Row>
              </Card.Title>
              <Card.Text as="div">
                <Row className="mt-4 pt-3 fs-7 align-items-center">
                  <Col>
                    <ul className="fa-ul">
                      {getItemsForSummary(props.summaryStats.file_summary.stats.format).map((x) => {
                        return (<li key={x} className="text-secondary text-uppercase fw-bold ms-0 ps-0 mb-2"><FontAwesomeIcon className="fa-li" transform="grow-3" icon={faFile} />{x}</li>)
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
