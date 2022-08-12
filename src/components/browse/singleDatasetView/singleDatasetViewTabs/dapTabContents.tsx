import { faUsersRays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import { getDACEmailId } from "../../../../utils/utils";

interface DapTabContentsProps {
  details: datasetEmbeddedModel;
}

const DapTabContents = (props: DapTabContentsProps) => {
  return (
    <Tab.Pane eventKey="3">
      {props.details.has_data_access_policy !== null ? (
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
            <strong>Policy: </strong>
            {props.details.has_data_access_policy.policy_text}
          </p>
          <p>
            <strong>Data Access Committee: </strong>
            {props.details.has_data_access_policy.has_data_access_committee.name}
          </p>
          <p>
            <strong>e-Mail: </strong>
            {getDACEmailId(props.details)}
          </p>
        </>
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
