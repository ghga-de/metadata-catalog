import { faUsersRays, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Button, Row, Col } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import { getDACEmailId } from "../../../../utils/utils";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

interface DapTabContentsProps {
  details: datasetEmbeddedModel;
}

const DapTabContents = (props: DapTabContentsProps) => {
  
  function isValidHttpUrl(str: string) {
    let url;
    try {
      url = new URL(str);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }
  
  return (
    <Tab.Pane eventKey="3" className="h-100">
      {props.details.has_data_access_policy !== null ? (
        <div className="text-break overflow-auto h-100">
          <PerfectScrollbar>
            {props.details.has_data_access_policy.policy_url !== null && isValidHttpUrl(props.details.has_data_access_policy.policy_url) ? (
              <Button
                href={props.details.has_data_access_policy.policy_url}
                target="_blank"
                variant="white"
                className="float-end fs-7 py-2 mb-2 ms-4 text-secondary shadow-md-dark border-secondary"
              >
                <Row className="p-0 m-0 align-items-center text-start">
                  <Col className="p-0 m-0 col-3 ">
                    <FontAwesomeIcon icon={faLink} />
                  </Col>
                  <Col className="p-0 m-0 lh-1">
                    <strong>HIPO DACO Info Form</strong>
                  </Col>
                </Row>
              </Button>
            ) : (
              <></>
            )}
            <h5 className="mb-4 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faUsersRays}
                pull="left"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "rgba(214,95,48,0.2)",
                  padding: "8px",
                }}
                className="text-secondary me-3 fs-4 rounded"
              />
              <strong>Policy and Data Access Committee</strong>
            </h5>
            {props.details.has_data_access_policy.has_data_access_committee.alias !== null ? (
              <p>
                <strong>Data Access Committee: </strong>
                {props.details.has_data_access_policy.has_data_access_committee.alias}
              </p>
            ) : ''}
            <p>
              <strong>e-Mail: </strong>
              {getDACEmailId(props.details)}
            </p>
            <p>
              <strong>Data Access Policy: </strong>
              {props.details.has_data_access_policy.name}
            </p>
            <p>
              <strong>Policy: </strong>
              {props.details.has_data_access_policy.policy_text.split('\n').map((x, idx) => (<span key={'dap_policy_' + idx} className="fs-7">{x}<br /></span>))}
            </p>
          </PerfectScrollbar>
        </div>
      ) : (
        <>
          <h5 className="mb-4 d-flex align-items-center">
            <FontAwesomeIcon
              icon={faUsersRays}
              pull="left"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "rgba(214,95,48,0.2)",
                padding: "8px",
              }}
              className="text-secondary me-3 fs-4 rounded"
            />
            <strong>Policy and Data Access Committee</strong>
          </h5>
          <p>
            No Data Access Policy or Data Access Committee found.
          </p>
        </>
      )}
    </Tab.Pane>
  );
};

export default DapTabContents;
