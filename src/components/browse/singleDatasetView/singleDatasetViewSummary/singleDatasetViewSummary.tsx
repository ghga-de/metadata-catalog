import { faCalendar, faFileLines } from "@fortawesome/free-regular-svg-icons";
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
        Dataset ID |{" "}
        {props.details.ega_accession !== null
          ? props.details.ega_accession
          : props.details.accession}
      </p>
      <div className="fs-7">
        <Row className="me-0 mb-2 w-100 mx-0">
          <Col xs={"auto"} className="px-0">
            Study Type |{" "}
          </Col>
          <Col className="ps-1 pe-0">
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
          </Col>
        </Row>
        <Row className="me-0 mb-3 w-100 mx-0">
          <Col xs={"auto"} className="px-0">
            Dataset Type |{" "}
          </Col>
          <Col className="ps-1 pe-0">
            <Badge
              key={props.details.type}
              className="py-1 px-2 fw-normal text-capitalize me-0 text-wrap text-start"
            >
              {props.details.type}
            </Badge>
          </Col>
        </Row>
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
      </div>
      <Row className="fs-7 w-100 mx-0">
        <Col>
          <strong>
            <FontAwesomeIcon
              icon={faFileLines}
              className="text-secondary me-2"
            />
            Description
          </strong>
        </Col>
      </Row>
      <Row className="fs-7 my-2 border border-1 border-dark border-end-0 border-start-0 pt-2 pb-3 w-100 mx-0">
        <Col className="">{props.details.description}</Col>
      </Row>
      <Row className="fs-7 mb-4 w-100 mx-0">
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
