import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";

interface PublicationTabContentsProps {
  details: datasetEmbeddedModel;
}

const PublicationTabContents = (props: PublicationTabContentsProps) => {
  return (
    <Tab.Pane eventKey="2">
      {props.details.has_publication && props.details.has_publication !== null ? (
        props.details.has_publication.map((x) => {
          return (
            <>
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
                <strong>ID: </strong>
                {x.accession}
              </p>
              <p>
                <strong>Title: </strong>
                {x.title}
              </p>
              <p>
                <strong>Abstract: </strong>
                {x.abstract}
              </p>
            </>
          );
        })
      ) : (
        <>
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
          <p>No publications found.</p>
        </>
      )}
    </Tab.Pane>
  );
};

export default PublicationTabContents;
