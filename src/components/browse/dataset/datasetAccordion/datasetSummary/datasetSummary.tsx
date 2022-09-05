import { Row, Button, Spinner, Col } from "react-bootstrap";
import { datasetSummaryModel, hitModel } from "../../../../../models/dataset";
import DatasetExperiments from "./datasetExperiments";
import DatasetFiles from "./datasetFiles";
import DatasetSamples from "./datasetSamples";
import DatasetStudies from "./datasetStudies";
import DataRequestModal from "./dataRequestModal/dataRequestModal";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
      <Row>
        <Row className="pe-0">
          <div className="pe-0 d-block">
            {props.summary !== null && props.summary !== undefined ? (
              <Button
                className="fs-8 float-end mb-3 ms-4 text-white shadow-md-dark"
                variant="secondary"
                onClick={() => handleOpen()}
                style={{ width: "105px" }}
              >
                <Row className="p-0 m-0 align-items-center">
                  <Col className="p-0 m-0 col-3 ">
                    <FontAwesomeIcon icon={faKey} />
                  </Col>
                  <Col className="p-0 m-0 lh-1">
                    <strong>Request Access</strong>
                  </Col>
                </Row>
              </Button>
            ) : (
              <Button
                className="fs-8 py-2 float-end mb-3 ms-4 text-white shadow-md-dark"
                variant="secondary"
                disabled
                style={{ width: "85px" }}
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
            <Button
              href={
                props.hit.content.ega_accession !== null
                  ? "browse/" + props.hit.content.ega_accession
                  : "browse/" + props.hit.content.accession
              }
              variant="secondary"
              className="text-white mb-2 shadow-md-dark"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />&nbsp;Dataset Details
            </Button>
            {props.hit.content.ega_accession !== null ? (<Button
              href={"https://ega-archive.org/datasets//" + props.hit.content.ega_accession}
              target="_blank"
              variant="light"
              className="fs-8 py-2 float-mid mb-2 ms-4 text-secondary shadow-md-dark"
            >
              <FontAwesomeIcon icon={faLink} />&nbsp;EGA Dataset
            </Button>) : (<div />)}
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
          <Row className="mb-3 mt-2 pt-3">
            <DatasetStudies study={props.summary.study_summary} />
            <DatasetFiles files={props.summary.file_summary} />
          </Row>
          <Row className="pb-4 pt-2 ">
            <DatasetSamples samples={props.summary.sample_summary} />
            <DatasetExperiments
              experiments={props.summary.experiment_summary}
            />
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
