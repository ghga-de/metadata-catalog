import {
  faClockFour,
  faCloudArrowDown,
  faEnvelope,
  faKey,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import browseImg from "../../assets/download/browse.png";
import downloadImg from "../../assets/download/download-1.png";
import emailImg from "../../assets/download/email.png";
import requestImg from "../../assets/download/request-access.png";
import {
  static_page_img_col_classes,
  static_page_img_row_classes,
  static_page_main_div_classes,
} from "../../utils/utils";

const Download = () => {
  return (
    <div className={static_page_main_div_classes}>
      <h5 className="d-flex align-items-center text-secondary fw-bold">
        <FontAwesomeIcon
          icon={faCloudArrowDown}
          pull="left"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "rgba(214,95,48,0.2)",
            padding: "8px",
          }}
          className="me-3 fs-4 rounded"
        />
        How to Access Data
      </h5>
      <hr className="border-secondary mb-4" />
      <div className="overflow-auto">
        <p className="fw-bold">
          The GHGA Data Portal is currently being developed and will allow data
          download request over the portal in the future. During this early
          phase of the project, we are listing non-personal metadata and acting
          as a gateway to data submitters who will serve the research data upon
          approval of the request.
        </p>
        <p className="fw-bold">
          Visit your dataset of interest and then click on the "Request access"
          button. This will prompt your email client to open with an email
          template to the data access committee for the dataset. Fill in the
          necessary information and send the email to data access committee
          email listed on the dataset.
        </p>
      </div>
      <Row className={static_page_img_row_classes}>
        <Col className={static_page_img_col_classes}>
          <img
            src={downloadImg}
            alt="Explore dataset - Request access - Send e-mail - Data owner interaction"
            className="w-100"
          />
        </Col>
      </Row>
      <div>
        <h5 className="mb-4 d-flex align-items-center text-secondary fw-bold">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            pull="left"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(214,95,48,0.2)",
              padding: "8px",
            }}
            className="me-3 fs-4 rounded"
          />
          Explore Datasets
        </h5>
        <p>
          To explore a dataset, please find the dataset of interest on the&nbsp;
          <Link to="/browse" target="_blank" rel="noreferrer">
            browse page
          </Link>{" "}
          using the search function
        </p>
        <Row className={static_page_img_row_classes}>
          <Col className={static_page_img_col_classes}>
            <img src={browseImg} alt="Browse view" className="w-100" />
          </Col>
        </Row>
      </div>
      <div>
        <h5 className="mb-4 d-flex align-items-center text-secondary fw-bold">
          <FontAwesomeIcon
            icon={faKey}
            pull="left"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(214,95,48,0.2)",
              padding: "8px",
            }}
            className="me-3 fs-4 rounded"
          />
          Request Access
        </h5>
        <p>
          To request a dataset, please find the dataset of interest on the&nbsp;
          <Link to="/browse" target="_blank" rel="noreferrer">
            browse page
          </Link>
          , expand the dataset by clicking the arrow at the right corner of the
          dataset box, and click "Request Access" button.
        </p>

        <Row className={static_page_img_row_classes}>
          <Col className={static_page_img_col_classes}>
            <img src={requestImg} alt="Dataset details" className="w-100" />
          </Col>
        </Row>
      </div>
      <div>
        <h5 className="mb-4 d-flex align-items-center text-secondary fw-bold">
          <FontAwesomeIcon
            icon={faEnvelope}
            pull="left"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(214,95,48,0.2)",
              padding: "8px",
            }}
            className="me-3 fs-4 rounded"
          />
          Send an email
        </h5>
        <p>
          This should prompt your email client (Microsoft Outlook, Apple Mail,
          ...) to create a new email with partially filled content. Please
          answer the questions in the mail, and send it to the respective
          contact e-mail. If your email client doesn't open, you can copy the
          e-mail, subject, and text to send the e-mail manually.
        </p>

        <Row className={static_page_img_row_classes}>
          <Col className={static_page_img_col_classes}>
            <img src={emailImg} alt="Dataset details" className="w-100" />
          </Col>
        </Row>
      </div>
      <div>
        <h5 className="mb-4 d-flex align-items-center text-secondary fw-bold">
          <FontAwesomeIcon
            icon={faClockFour}
            pull="left"
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "rgba(214,95,48,0.2)",
              padding: "8px",
            }}
            className="me-3 fs-4 rounded"
          />
          Data Owner Interaction
        </h5>
        <p className="mb-5">
          After communicating with the data owner, you will get permission for
          the desired datasets.
          <br />
          <strong>
            Note: The GHGA Metadata Catalog is not resposible for data accesion
          </strong>
        </p>
      </div>
      <div>
        <h5 className="mb-3 fw-bold">Additional Information:</h5>
        <p className="mb-0">Requesting Multiple Datasets:</p>
        <ul>
          <li>
            If you want to request all datasets from a study, you can send a
            request for the whole study with a single email.
          </li>
          <li>
            If you are interested in multiple datasets under the same use case,
            you can send us a single email, and list the datasets IDs you want
            to access, and answer questions once.
          </li>
          <li>
            If you are interested in multiple dataset for different use cases,
            please send separate emails for each use case.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Download;
