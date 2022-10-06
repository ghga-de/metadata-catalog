import { faBookOpen, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Button, Row, Col } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

interface PublicationTabContentsProps {
  details: datasetEmbeddedModel;
}

const PublicationTabContents = (props: PublicationTabContentsProps) => {

  return (
    <Tab.Pane eventKey="2" className="h-100">
      {props.details.has_study.map((y, idy) => {
        return (<div key={'study_' + idy}>
          {y.has_publication?.map((x) => {
            return (
              <div key={x.id} className="text-break overflow-auto h-100">
                <PerfectScrollbar>
                  {x.alias !== null ? (
                    <Button
                      href={"https://doi.org/" + x.alias.slice(5)}
                      target="_blank"
                      variant="white"
                      className="float-end fs-8 py-2 mb-2 ms-4 text-secondary shadow-md-dark border-secondary"
                    >
                      <Row className="p-0 m-0 align-items-center text-start">
                        <Col className="p-0 m-0 col-3 ">
                          <FontAwesomeIcon icon={faLink} />
                        </Col>
                        <Col className="p-0 m-0 lh-1">
                          <strong>Visit Publication</strong>
                        </Col>
                      </Row>
                    </Button>
                  ) : (
                    <></>
                  )}
                  <h5 className="mb-4 d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      pull="left"
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "rgba(214,95,48,0.2)",
                        padding: "8px",
                      }}
                      className="text-secondary me-3 fs-4 rounded"
                    />
                    <strong>Publication</strong>
                  </h5>
                  <p>
                    <strong>Title: </strong>
                    {x.title}
                  </p>
                  <p>
                    <strong>Author: </strong>
                    {x.author}
                    &nbsp;
                    <strong>Journal: </strong>
                    {x.journal}
                    &nbsp;
                    <strong>Year: </strong>
                    {x.year}
                  </p>
                  <p>
                    <strong>Abstract: </strong>
                    {x.abstract.split('\n').map((x, idx) => (<span key={'pub_abstract_' + idx}>{x}<br /></span>))}
                  </p>
                </PerfectScrollbar>
              </div>
            );
          })
          }</div>)
      })}
    </Tab.Pane>
  );
};

export default PublicationTabContents;
