import { faCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartColumn, faDna } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getMetadataSummary } from "../../../api/browse";
import { metadataSummaryModel } from "../../../models/dataset";
import { getItemsForSummary } from "../../../utils/utils";

const HomeMidSection = () => {
  const [summary, setSummary] = React.useState<metadataSummaryModel | null>(
    null
  );

  React.useEffect(() => {
    const getData = () => {
      getMetadataSummary(setSummary);
    };
    getData();
  }, []);

  return (
    <Col className="px-2">
      <Row className="rounded bg-primary w-100 mx-0 mb-3 pb-5 pe-4 justify-content-evenly">
        <h4 className="fw-bold fs-2 text-white p-4 pb-4 ms-4">Statistics</h4>
        <>
          {summary !== null ? (
            <>
              <Card
                style={{ width: "16rem", borderRadius: "15px" }}
                className="d-inline-block shadow border-white bg-primary mx-2 p-1"
              >
                <Card.Body>
                  <Card.Title className="text-white fw-bold">
                    <Row className="w-bold fs-5 ps-0">
                      <span className="text-center">Total Datasets:</span>
                    </Row>
                  </Card.Title>
                  <Card.Text as="div">
                    <Row className="mt-4 pt-3 fs-7 align-items-center">
                      <Col className="text-center">
                        <NavLink
                          to="/browse"
                          style={{
                            borderRadius: "50%",
                            width: "9rem",
                            height: "9rem",
                            background:
                              "linear-gradient(#e84614 5%, #CFE7CD 70%)",
                          }}
                          className="mx-auto d-block text-decoration-none"
                        >
                          <div
                            style={{
                              borderRadius: "50%",
                              width: "7rem",
                              height: "7rem",
                              top: "1rem",
                              left: "1rem",
                              position: "relative",
                            }}
                            className="bg-white d-flex align-items-center"
                          >
                            <span className="w-100 text-center fs-1">
                              {summary.dataset_summary.count}
                            </span>
                          </div>
                        </NavLink>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "16rem", borderRadius: "15px" }}
                className="d-inline-block shadow border-muted mx-2 p-1"
              >
                <Card.Body>
                  <Card.Title className="text-secondary fw-bold">
                    <Row
                      style={{ fontSize: "36px" }}
                      className="p-0 col-auto mb-2"
                    >
                      <span className="fa-layers fa-fw fa-lg">
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faDna} transform="shrink-8" />
                      </span>
                    </Row>
                    <Row className="w-bold fs-5 ps-0">
                      <span className="text-center">
                        Platforms:&nbsp;
                        {
                          Object.keys(summary.protocol_summary.stats.protocol)
                            .length
                        }
                      </span>
                    </Row>
                  </Card.Title>
                  <Card.Text as="div">
                    <Row className="pt-3 fs-7 ">
                      <Col>
                        {getItemsForSummary(
                          summary.protocol_summary.stats.protocol
                        ).map((x) => {
                          return (
                            <Row
                              key={x}
                              className="text-capitalize ms-0 ps-0 mb-2"
                            >
                              <Col className="ms-0 ps-0">
                                {x.split(": ")[0]}:
                              </Col>
                              <Col className="col-auto text-end fw-bold">
                                {x.split(": ")[1]}
                              </Col>
                            </Row>
                          );
                        })}
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "16rem", borderRadius: "15px" }}
                className="d-inline-block shadow border-white mx-2 bg-primary p-1"
              >
                <Card.Body className="text-white">
                  <Card.Title>
                    <Row
                      style={{ fontSize: "36px" }}
                      className="p-0 col-auto mb-2"
                    >
                      <span className="fa-layers fa-fw fa-lg">
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faUser} transform="shrink-8" />
                      </span>
                    </Row>
                    <Row className="w-bold fs-5 ps-0">
                      <span className="text-center">
                        Individuals:&nbsp;
                        {summary.individual_summary.count}
                      </span>
                    </Row>
                  </Card.Title>
                  <Card.Text as="div" className="fs-7">
                    <Row className="pt-4 mt-3">
                      <Col className="text-center">
                        Female:&nbsp;
                        <strong>
                          {summary.individual_summary.stats.sex["female"]}
                        </strong>
                      </Col>
                      <Col className="text-center">
                        Male:&nbsp;
                        <strong>
                          {summary.individual_summary.stats.sex["male"]}
                        </strong>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col className="text-center">
                        Unknown:&nbsp;
                        <strong>
                          {summary.individual_summary.stats.sex["unknown"]
                            ? summary.individual_summary.stats.sex["unknown"]
                            : 0}
                        </strong>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "16rem", borderRadius: "15px" }}
                className="d-inline-block shadow border-muted mx-2 p-1"
              >
                <Card.Body>
                  <Card.Title className="text-secondary fw-bold">
                    <Row
                      style={{ fontSize: "36px" }}
                      className="p-0 col-auto mb-2"
                    >
                      <span className="fa-layers fa-fw fa-lg">
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon
                          icon={faChartColumn}
                          transform="shrink-8"
                        />
                      </span>
                    </Row>
                    <Row className="w-bold fs-5 ps-0">
                      <span className="text-center">
                        Files:&nbsp;
                        {summary.file_summary.count}
                      </span>
                    </Row>
                  </Card.Title>
                  <Card.Text as="div">
                    <Row className="mt-4 pt-3 fs-7 align-items-center">
                      <table>
                        <tbody>
                        {getItemsForSummary(
                          summary.file_summary.stats.format
                        ).map((x) => {
                          return (
                            <tr
                              key={x}
                              className="text-uppercase ms-0 ps-0 mb-2"
                            >
                              <td className="ms-0 ps-3 pe-4" 
                              style={{width: "1px", whiteSpace: "nowrap"}}>
                                {x.split(": ")[0]}:
                              </td>
                              <td className="fw-bold">
                                {x.split(": ")[1]}
                              </td>
                            </tr>
                          );
                        })}
                        </tbody>
                      </table>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ) : (
            <></>
          )}
        </>
      </Row>
    </Col>
  );
};

export default HomeMidSection;
