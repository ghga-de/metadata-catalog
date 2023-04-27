import { Row, Button, Spinner, Col } from "react-bootstrap";
import {
  datasetDetailsSummaryModel,
  hitModel,
} from "../../../../../models/dataset";
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
  summary: datasetDetailsSummaryModel | null | undefined;
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

  const pClass = "mb-0";

  return (
    <div className="fs-7">
      <div className="pe-0 px-0 px-md-2 pt-md-1">
        <div className="float-end ps-0 ps-md-4 ms-1">
          {props.summary !== null && props.summary !== undefined ? (
            <>
              <Button
                className="fs-7 mb-3 text-white shadow-md-dark d-block"
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
              <Button
                href={
                  props.hit.content.ega_accession !== null
                    ? "browse/" + props.hit.content.ega_accession
                    : "browse/" + props.hit.content.accession
                }
                variant="secondary"
                className="text-white mb-3 fs-7 shadow-md-dark d-block"
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
              {props.hit.content.ega_accession !== null ? (
                <Button
                  href={
                    "https://ega-archive.org/datasets/" +
                    props.hit.content.ega_accession
                  }
                  target="_blank"
                  variant="white"
                  title="Visit the EGA Page for this Dataset"
                  className="fs-7 text-secondary shadow-md-dark text-start border-secondary d-block"
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
              className="fs-7 mb-3 py-2 text-white shadow-md-dark"
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
        <div className="text-break mb-3">
          <p className={pClass}>
            <strong>Dataset ID:&nbsp;</strong>
            {props.hit.content.ega_accession !== null
              ? props.hit.content.ega_accession
              : props.hit.content.accession}
          </p>
          <p className={pClass}>
            <strong>Full title:&nbsp;</strong>
            {props.hit.content.title}
          </p>
          <p className={pClass}>
            <strong>Description:&nbsp;</strong>
            {props.hit.content.description}
          </p>
          <p className={pClass}>
            <strong>Type:&nbsp;</strong>
            {props.hit.content.type}
          </p>
        </div>
        {props.summary !== null && props.summary !== undefined ? (
          <div>
            <Row className="pt-3">
              <Col xs={12} md={6} lg={12} xl={6}>
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
    </div>
  );
};

export default DatasetSummary;
