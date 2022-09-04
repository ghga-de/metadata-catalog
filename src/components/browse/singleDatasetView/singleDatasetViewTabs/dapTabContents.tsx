import { faUsersRays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import { getDACEmailId } from "../../../../utils/utils";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

interface DapTabContentsProps {
  details: datasetEmbeddedModel;
}

const DapTabContents = (props: DapTabContentsProps) => {
  return (
    <Tab.Pane eventKey="3" className="h-100">
      {props.details.has_data_access_policy !== null ? (
        <div className="text-break overflow-auto h-100">
          <PerfectScrollbar>
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
              <strong>Data Access Policy: </strong>
              {props.details.has_data_access_policy.name}
            </p>
            <p>
              <strong>e-Mail: </strong>
              {getDACEmailId(props.details)}
            </p>
            <p>
              <strong>Policy: </strong>
              {props.details.has_data_access_policy.policy_text}
            </p>
          </PerfectScrollbar>
        </div>
      ) : (<>
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
