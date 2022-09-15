import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "react-bootstrap";
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
                    <strong>Abstract: </strong>
                    {x.abstract.split('\n').map((x, idx) => (<span key={'pub_abstract_' + idx}>{x}<br/></span>))}
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
