import {
  faCalendar,
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Col, Row } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";

interface SingleDatasetViewSummaryProps {
  details: datasetEmbeddedModel;
}

const SingleDatasetViewSummary = (props: SingleDatasetViewSummaryProps) => {
  return (
    <div>
      <h5>
        <strong>{props.details.title}</strong>
      </h5>
      <p>
        Dataset ID | {props.details.accession}
      </p>
      <p className="fs-7">
        <span className="me-3">
          Study Type |{" "}
          {props.details.has_study?.map((x) => {
            return (
              <Badge
                key={x.type}
                className="py-1 px-2 fw-normal text-capitalize me-2"
              >
                {x.type}
              </Badge>
            );
          })}
        </span>
        {props.details.has_attribute?.length > 0 ? (
          props.details.has_attribute?.map((x) => {
            return (
              <span key={x.value + "span"}>
                Centre name: <strong key={x.value + "strong"}>{x.value}</strong>
              </span>
            );
          })
        ) : (
          <></>
        )}
      </p>
      <Row className="fs-7">
        <Col>
          <strong>
            <FontAwesomeIcon
              icon={faFileLines}
              className="text-secondary me-2"
            />
            Description
          </strong>
        </Col>
        <Col className="text-end">
          <Badge className="py-1 px-2 fw-normal">
            Status:{" "}
            <span className="text-capitalize">
              {props.details.release_status}
            </span>
          </Badge>
        </Col>
      </Row>
      <Row className="fs-8 my-2 border border-1 border-dark border-end-0 border-start-0 pt-2 pb-3">
        <Col>{props.details.description}</Col>
      </Row>
      <Row className="fs-8 mb-4">
        <Col className="text-end">
          <FontAwesomeIcon
            icon={faCalendar}
            transform="up-1"
            className="me-1"
          />
          {props.details.release_date !== null ? (
            <>{props.details.release_date.split("T")[0]} Accession date</>
          ) : props.details.update_date !== null ? (
            <>{props.details.update_date.split("T")[0]} Update date</>
          ) : (
            <>{props.details.creation_date.split("T")[0]} Creation date</>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SingleDatasetViewSummary;
