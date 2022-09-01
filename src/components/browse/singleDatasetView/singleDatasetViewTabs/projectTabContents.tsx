import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

interface ProjectTabContentsProps {
  details: datasetEmbeddedModel;
}

const ProjectTabContents = (props: ProjectTabContentsProps) => {
  return (
    <Tab.Pane eventKey="1" className="h-100">
      {props.details.has_study !== null ?
        props.details.has_study.map((x) => {
          return x.has_project ? (
            <div key={x.id} className="text-break overflow-auto h-100">
              <PerfectScrollbar>
                <h5 className="mb-4 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    pull="left"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "rgba(214,95,48,0.2)",
                      padding: "8px",
                    }}
                    className="text-secondary me-3 fs-4 rounded"
                    transform="rotate-180"
                  />
                  <strong>Project</strong>
                </h5>
                <p>
                  <strong>ID: </strong>
                  {x.ega_accession !== null ? x.ega_accession : x.accession !== null ? x.accession : (
                    <>N/A</>
                  )}
                </p>
                <p>
                  <strong>Title: </strong>
                  {x.has_project?.title}
                </p>
                <p>
                  <strong>Attributes: </strong>
                  {x.has_project?.has_attribute !== null ? (
                    <>
                      {x.has_project?.has_attribute?.map((x) => {
                        return (
                          <p className="ms-3 mb-1">
                            <strong>{x.key}: </strong>
                            {x.value}
                          </p>
                        );
                      })}
                    </>
                  ) : (
                    <>N/A</>
                  )}
                </p>
                <p>
                  <strong>Description: </strong>
                  {x.has_project?.description}
                </p>
              </PerfectScrollbar>
            </div>
          ) : (
            <></>
          );
        }) : (
          <>
            <h5 className="mb-4 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faChartSimple}
                pull="left"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "rgba(214,95,48,0.2)",
                  padding: "8px",
                }}
                className="text-secondary me-3 fs-4 rounded"
                transform="rotate-180"
              />
              <strong>Project</strong>
            </h5>
            <p>
              No projects found.
            </p>
          </>
        )}
    </Tab.Pane>
  );
};

export default ProjectTabContents;
