import { Row, Button, Spinner, Col } from "react-bootstrap";
import {
  dataAccessCommitteeModel,
  dataAccessPolicyModel,
  datasetEmbeddedModel,
  hitModel,
} from "../../../../../models/dataset";
import DatasetExperiments from "./datasetExperiments";
import DatasetFiles from "./datasetFiles";
import DatasetSamples from "./datasetSamples";
import DatasetStudies from "./datasetStudies";
import DataRequestModal from "./dataRequestModal/dataRequestModal";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

interface dataSetDetailsProps {
  hit: hitModel;
  details: datasetEmbeddedModel | null | undefined;
}

const DatasetDetails = (props: dataSetDetailsProps) => {
  const [show, setShow] = React.useState(false);
  const [copyEmail, setCopyEmail] = React.useState<string>("helpdesk@ghga.de");
  const handleClose = () => setShow(false);

  var dacFormLink: string | null = null;
  if (props.details && props.details.has_data_access_policy.data_request_form) {
    dacFormLink = props.details.has_data_access_policy.data_request_form;
  }

  const getEmailId = () => {
    let mailId: string = "helpdesk@ghga.de";
    if (props.details !== null && props.details !== undefined) {
      const dataAccessPolicy: dataAccessPolicyModel =
        props.details.has_data_access_policy;
      const dataAccessCommittee: dataAccessCommitteeModel =
        dataAccessPolicy.has_data_access_committee;
      const main_contact = dataAccessCommittee.main_contact;
      for (var item of dataAccessCommittee.has_member) {
        if (main_contact === null) {
          mailId =
            item.email === null || item.email === undefined
              ? mailId
              : item.email;
        }
        if (
          item.id === main_contact &&
          item.email !== null &&
          item.email !== undefined
        ) {
          mailId = item.email;
        }
      }
    }
    return mailId;
  };

  const handleOpen = () => {
    setCopyEmail(getEmailId());
    setShow(true);
  };

  return (
    <div className="fs-8">
      <Row>
        <Row className="pe-0">
          <div className="pe-0 d-block">
            {props.details !== null && props.details !== undefined ? (
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
            <p>
              <span className="fw-bold">Dataset ID:&nbsp;</span>
              <span style={{ userSelect: "all" }}>
                {props.hit.content.accession}
              </span>
              <br />
              <span className="fw-bold">Full title:&nbsp;</span>
              <span style={{ userSelect: "all" }}>
                {props.hit.content.title}
              </span>
              <br />
              <span className="fw-bold">Description:&nbsp;</span>
              {props.hit.content.description}
            </p>
          </div>
          <DataRequestModal
            accession={props.hit.content.accession}
            copyEmail={copyEmail}
            show={show}
            handleClose={handleClose}
            dacFormLink={dacFormLink}
          />
        </Row>
      </Row>
      {props.details !== null && props.details !== undefined ? (
        <div>
          <Row className="mb-3 mt-2 pt-3">
            <DatasetStudies studiesList={props.details.has_study} />
            <DatasetFiles filesList={props.details.has_file} />
          </Row>
          <Row className="pb-4 pt-2 ">
            <DatasetSamples samplesList={props.details.has_sample} />
            <DatasetExperiments
              experimentsList={props.details.has_experiment}
              hit={props.hit}
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

export default DatasetDetails;
