import {
  faBookOpen,
  faBook,
  faChartSimple,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Tab } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import DapTabContents from "./dapTabContents";
import ProjectTabContents from "./projectTabContents";
import PublicationTabContents from "./publicationTabContents";
import StudyTabContents from "./studyTabContents";

interface SingleDatasetViewTabsProps {
  details: datasetEmbeddedModel;
}

const SingleDatasetViewTabs = (props: SingleDatasetViewTabsProps) => {
  return (
    <div className="mx-auto w-100 mb-5">
      <Tab.Container defaultActiveKey="0">
        <Nav variant="pills" className="justify-content-center mb-2 w-100">
          <Nav.Item>
            <Nav.Link
              eventKey="0"
              className="border border-1 mx-2 border-light-3 text-center d-flex align-items-center justify-content-center"
              style={{width: "150px", borderRadius:"10px"}}
            >
              <FontAwesomeIcon
                icon={faBook}
                className="text-secondary me-2 rounded"
                style={{width: "15px", height: "15px", backgroundColor: "rgba(214,95,48,0.2)", padding:"4px"}}
              />
              Study
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              className="border border-1 mx-2 border-light-3 text-center d-flex align-items-center justify-content-center"
              style={{width: "150px", borderRadius:"10px"}}
            >
              <FontAwesomeIcon
                icon={faChartSimple}
                className="text-secondary me-2 rounded"
                style={{width: "15px", height: "15px", backgroundColor: "rgba(214,95,48,0.2)", padding:"4px"}}
                transform="rotate-180"
              />
              Project
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="2"
              className="border border-1 mx-2 border-light-3 text-center d-flex align-items-center justify-content-center"
              style={{width: "150px", borderRadius:"10px"}}
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-secondary me-2 rounded"
                style={{width: "15px", height: "15px", backgroundColor: "rgba(214,95,48,0.2)", padding:"4px"}}
              />
              Publication
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="3"
              className="border border-1 mx-2 border-light-3 text-center d-flex align-items-center justify-content-center"
              style={{width: "150px", borderRadius:"10px"}}
            >
              <FontAwesomeIcon
                icon={faUsersRays}
                className="text-secondary me-2 rounded"
                style={{width: "15px", height: "15px", backgroundColor: "rgba(214,95,48,0.2)", padding:"4px"}}
                transform="grow-7"
              />
              DAP/DAC
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="mx-auto w-100 mb-5 border border-1 border-light-3 p-3 shadow-sm" style={{borderRadius: "20px"}}>
          <Tab.Content className="mb-4" style={{height: "450px"}}>
            <StudyTabContents details={props.details} />
            <ProjectTabContents details={props.details} />
            <PublicationTabContents details={props.details} />
            <DapTabContents details={props.details} />
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default SingleDatasetViewTabs;
