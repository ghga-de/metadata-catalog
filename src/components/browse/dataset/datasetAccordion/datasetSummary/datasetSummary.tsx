import { Row, Button, Spinner, Col } from "react-bootstrap";
import { datasetSummaryModel, hitModel } from "../../../../../models/dataset";
import DatasetExperiments from "./datasetExperiments";
import DatasetFiles from "./datasetFiles";
import DatasetSamples from "./datasetSamples";
import DatasetStudies from "./datasetStudies";
import DataRequestModal from "./dataRequestModal/dataRequestModal";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faLink,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

interface dataSetDetailsProps {
  hit: hitModel;
  summary: datasetSummaryModel | null | undefined;
}

const DatasetSummary = (props: dataSetDetailsProps) => {
  const [show, setShow] = React.useState(false);
  const [copyEmail, setCopyEmail] = React.useState<string>("helpdesk@ghga.de");
  const handleClose = () => setShow(false);

  var dacFormLink: string | null = null;
  /*if (props.details && props.details.has_data_access_policy.data_request_form) {
    dacFormLink = props.details.has_data_access_policy.data_request_form;
  }*/

  const handleOpen = () => {
    setCopyEmail(
      props.summary !== null && props.summary
        ? props.summary.dac_email
        : "helpdesk@ghga.de"
    );
    setShow(true);
  };

  return (
    <div className="fs-8">
      <div className="ms-auto float-end ps-4">
        {props.summary !== null && props.summary !== undefined ? (
          <>
            <Button
              className="fs-8 mb-3 text-white shadow-md-dark"
              variant="secondary"
              onClick={() => handleOpen()}
              style={{ width: "115px" }}
              title="Request access"
            >
              <Row className="p-0 m-0 align-items-center text-start">
                <Col className="p-0 m-0 col-3 ">
                  <FontAwesomeIcon icon={faKey} />
                </Col>
                <Col className="p-0 m-0 lh-1">
                  <strong>Request Access</strong>
                </Col>
              </Row>
            </Button>
            <br />
            <Button
              href={
                props.hit.content.ega_accession !== null
                  ? "browse/" + props.hit.content.ega_accession
                  : "browse/" + props.hit.content.accession
              }
              variant="secondary"
              className="text-white mb-3 fs-8 shadow-md-dark"
              title="Dataset Details"
              style={{ width: "115px" }}
            >
              <Row className="p-0 m-0 align-items-center text-start">
                <Col className="p-0 m-0 col-3 ">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </Col>
                <Col className="p-0 m-0 lh-1">
                  <strong>Dataset Details</strong>
                </Col>
              </Row>
            </Button>
            <br />
            {props.hit.content.ega_accession !== null ? (
              <Button
                href={
                  "https://ega-archive.org/datasets/" +
                  props.hit.content.ega_accession
                }
                target="_blank"
                variant="white"
                title="Visit the EGA Page for this Dataset"
                className="fs-8 mb-3 text-secondary shadow-md-dark text-start border-secondary"
                style={{ width: "115px" }}
              >
                <Row className="p-0 m-0 align-items-center text-start">
                  <Col className="p-0 m-0 col-3 ">
                    <FontAwesomeIcon icon={faLink} />
                  </Col>
                  <Col className="p-0 m-0 lh-1">
                    <strong>Visit EGA Website</strong>
                  </Col>
                </Row>
              </Button>
            ) : (
              <div />
            )}
          </>
        ) : (
          <Button
            className="fs-8 mb-3 py-2 text-white shadow-md-dark"
            variant="secondary"
            disabled
            style={{ width: "115px" }}
          >
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </Button>
        )}
      </div>
      <Row>
        <Row className="pe-0">
          <div className="pe-0 d-block">
            <p>
              <span className="fw-bold">Dataset ID:&nbsp;</span>
              <span style={{ userSelect: "all" }}>
                {props.hit.content.ega_accession !== null
                  ? props.hit.content.ega_accession
                  : props.hit.content.accession}
              </span>
              <br />
              <span className="fw-bold">Full title:&nbsp;</span>
              <span style={{ userSelect: "all" }}>
                {props.hit.content.title}
              </span>
              <br />
              <span className="fw-bold">Description:&nbsp;</span>
              {props.hit.content.description}
              <br />
              <span className="fw-bold">Type:&nbsp;</span>
              <span style={{ userSelect: "all" }}>
                {props.hit.content.type}
              </span>
            </p>
          </div>
          <DataRequestModal
            accession={
              props.hit.content.ega_accession !== null
                ? props.hit.content.ega_accession
                : props.hit.content.accession
            }
            copyEmail={copyEmail}
            show={show}
            handleClose={handleClose}
            dacFormLink={dacFormLink}
          />
        </Row>
      </Row>
      {props.summary !== null && props.summary !== undefined ? (
        <div>
          <Row className="pt-3">
            <Col>
              <DatasetStudies study={props.summary.study_summary} />
              <DatasetSamples samples={props.summary.sample_summary} />
            </Col>
            <Col>
              <DatasetFiles files={props.summary.file_summary} />
              <DatasetExperiments
                experiments={props.summary.experiment_summary}
              />
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <Spinner animation="border" variant="primary" size="sm" />
          &nbsp;Dataset details loading, please wait...
        </div>
      )}
    </div>
  );
};

export default DatasetSummary;
