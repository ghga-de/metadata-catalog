import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import schemaImg from "../../assets/metadataModel/metadatamodel_schema.png";
import {
  static_page_img_col_classes,
  static_page_img_row_classes,
  static_page_main_div_classes,
} from "../../utils/utils";

export const MetadataModel = () => {
  return (
    <div className={static_page_main_div_classes}>
      <h5 className="mb-4 d-flex align-items-center text-secondary fw-bold">
        <FontAwesomeIcon
          icon={faDesktop}
          pull="left"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "rgba(214,95,48,0.2)",
            padding: "8px",
          }}
          className="me-3 fs-4 rounded"
        />
        Metadata Model
      </h5>
      <hr className="border-secondary mb-4" />
      <div className="overflow-auto">
        <p className="fw-bold">
          The GHGA Metadata Catalog provides core functionality to capture
          metadata and allows for FAIR compliant sharing of genomics data. Our
          model is constructed using ontologies and controlled vocabularies that
          enable the data submitters to enrich their submitted data in a
          standardised manner as well as efficiently communicate their data to
          the research community. The implementation of our metadata catalog is
          done using the Linked Data Modelling Language (LinkML) and is openly
          accessible for everyone on the&nbsp;
          <a
            href="https://ghga-de.github.io/ghga-metadata-schema/"
            target="_blank"
            rel="noreferrer"
          >
            GHGA GitHub Repository.
          </a>
          &nbsp;For more information please visit our&nbsp;
          <a
            href="https://ghga-de.github.io/ghga-metadata-schema/"
            target="_blank"
            rel="noreferrer"
          >
            documentation.
          </a>
        </p>
        <p>The Core-Model captures three categories of data:</p>
        <ul>
          <li>Technical</li>
          <li>Dataset</li>
          <li>Sample</li>
        </ul>
        <Row className={static_page_img_row_classes}>
          <a
            className="p-2 border border-1 border-light-3 shadow-sm d-flex align-items-center justify-content-center"
            style={{ borderRadius: "20px" }}
            href={schemaImg}
            target="_blank"
            rel="noreferrer"
          >
            <Col className={static_page_img_col_classes}>
              <img src={schemaImg} alt="Schema" className="w-100" />
            </Col>
          </a>
        </Row>
      </div>
    </div>
  );
};

export default MetadataModel;
