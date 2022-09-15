import { faBook, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Button, Row, Col } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

interface StudyTabContentsProps {
  details: datasetEmbeddedModel;
}

const StudyTabContents = (props: StudyTabContentsProps) => {
  return (
    <Tab.Pane eventKey="0" className="h-100">
      {props.details.has_study !== null ? (
        props.details.has_study.map((x) => {
          return (
            <div key={x.id} className="text-break overflow-auto h-100">
              <PerfectScrollbar>
                {x.ega_accession !== null ? (
                  <Button
                    href={"https://ega-archive.org/studies/" + x.ega_accession}
                    target="_blank"
                    variant="white"
                    className="float-end fs-8 py-2 mb-2 ms-4 text-secondary shadow-md-dark border-secondary"
                  >
                    <Row className="p-0 m-0 align-items-center text-start">
                      <Col className="p-0 m-0 col-3 ">
                        <FontAwesomeIcon icon={faLink} />
                      </Col>
                      <Col className="p-0 m-0 lh-1">
                        <strong>Visit EGA Study</strong>
                      </Col>
                    </Row>
                  </Button>
                ) : (
                  <></>
                )}
                <h5 className="mb-4 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faBook}
                    pull="left"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "rgba(214,95,48,0.2)",
                      padding: "8px",
                    }}
                    className="text-secondary me-3 fs-4 rounded"
                  />
                  <strong>Study</strong>
                </h5>
                <p className="mb-4">
                  <strong>ID: </strong>
                  {x.ega_accession !== null ? x.ega_accession : x.accession}
                </p>
                <p className="mb-4">
                  <strong>Title: </strong>
                  {x.title}
                </p>
                <p>
                  <strong>Description: </strong>
                  {x.description}
                </p>
                <p className="mb-4">
                  <strong>Type: </strong>
                  <span className="text-capitalize">{x.type}</span>
                </p>
                <p>
                  <strong>Attributes: </strong>
                  {x.has_attribute !== null ? (
                    <>
                      {x.has_attribute?.map((y) => {
                        return (
                          <span
                            className="ms-3 mb-1 text-capitalize d-block"
                            key={y.key + ":" + y.value}
                          >
                            {y.key === "centerName" ? (
                              <>
                                <strong>Centre Name: </strong> {y.value}
                              </>
                            ) : y.key === "released" &&
                              y.value === "RELEASED" ? (
                              <>
                                <strong>Release date: </strong>
                                {x.release_date !== null ? (
                                  x.release_date
                                ) : (
                                  <>N/A</>
                                )}
                              </>
                            ) : (
                              <>
                                <strong>{y.key}</strong> {y.value}
                              </>
                            )}
                          </span>
                        );
                      })}
                    </>
                  ) : (
                    <>N/A</>
                  )}
                </p>
              </PerfectScrollbar>
            </div>
          );
        })
      ) : (
        <>
          <h5 className="mb-4 d-flex align-items-center">
            <FontAwesomeIcon
              icon={faBook}
              pull="left"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "rgba(214,95,48,0.2)",
                padding: "8px",
              }}
              className="text-secondary me-3 fs-4 rounded"
            />
            <strong>Study</strong>
          </h5>
          <p className="mb-4">No study found.</p>
        </>
      )}
    </Tab.Pane>
  );
};

export default StudyTabContents;
