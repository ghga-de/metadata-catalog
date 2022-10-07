import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import schemaImg from "../../assets/metadataModel/schema-1.png";

export const MetadataModel = () => {
  return (
    <div className="mx-auto w-75 px-5 my-4">
      <Container
        className="mb-5 border border-1 border-light-alternative p-3 shadow-sm"
        style={{ borderRadius: "20px" }}
      >
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
        <div className="overflow-auto">
          <p className="fw-bold">
            The GHGA Metadata Catalog provides core functionality to capture metadata and allows for FAIR compliant sharing of genomics data.
            Our model is constructed using ontologies and controlled vocabularies that enable the data submitters to enrich their submitted data in a standardised manner as well as efficiently communicate their data to the research community.
            The implementation of our metadata catalog is done using the Linked Data Modelling Language (LinkML) and is openly accessible for everyone on the GHGA GitHub Repository.
          </p>
          <p>
            The Core-Model captures three categories of data:
          </p>
          <ul>
            <li>Technical</li>
            <li>Dataset</li>
            <li>Sample</li>
          </ul>
          <img src={schemaImg} alt="schema" className="float-end" width="80%" />
        </div>

      </Container>
    </div>
  );
};

export default MetadataModel;
