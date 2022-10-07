import { faClockFour, faCloudArrowDown, faEnvelope, faKey, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Container } from "react-bootstrap";
import downloadImg from "../../assets/download/download-1.png";
import browseImg from "../../assets/download/browse.png";
import requestImg from "../../assets/download/request-access.png";
import { Link } from "react-router-dom";

const Download = () => {
    return (

        <div className="mx-auto w-75 px-5 my-4">
            <Row>
                <Container
                    className="mb-5 border border-1 border-light-alternative p-3 shadow-sm"
                    style={{ borderRadius: "20px" }}
                >
                    <h5 className="mb-4 d-flex align-items-center text-secondary fw-bold">
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
                        How to Download Data
                    </h5>
                    <div className="overflow-auto">
                        <p className="fw-bold">
                            The GHGA Data Portal is currently being developed and will allow data download request over the portal in the future.
                            Currently we are running an early phase project called GHGA Metadata Catalog, listing anonymous metadata and
                            acting as a gateway to data submitters who will serve the research data upon approval of the request.
                        </p>
                        <p className="fw-bold">
                            Visit your dataset of interest and then click on the "Request access" button.
                            This will prompt your email client to open with an email template to the data access committee for the dataset.
                            Fill in the necessary information and send the email to  data access committee email listed on the dataset.
                        </p>
                    </div>
                </Container>
            </Row>
            <Row>
                <Container>
                    <div>
                        <img src={downloadImg} alt="schema" className="float-end" width="100%" />
                    </div>
                </Container>
            </Row>
            <Row>
                <Container>
                    <div className="overflow-auto">
                        <p>
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
                                Browse Datasets
                            </h5>
                        </p>
                        <p>
                            To explore a dataset, please find the dataset of interest on the&nbsp;
                            <Link to="/browse" target="_blank" rel="noreferrer">
                                browse page
                            </Link> &nbsp;using search function
                        </p>
                        <img src={browseImg} alt="schema" className="float-middle" width="80%" />
                    </div>
                </Container>
            </Row>
            <Row>
                <Container>
                    <div className="overflow-auto">
                        <p>
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
                        </p>
                        <p>
                            To request a dataset, please find the dataset of interest on the &nbsp;
                            <Link to="/browse" target="_blank" rel="noreferrer">
                                browse page
                            </Link> &nbsp;,
                            expand the dataset by clicking the arrow at the right corner of the dataset box, and click "Request Access" button.
                        </p>
                        <img src={requestImg} alt="schema" className="float-middle" width="80%" />
                    </div>
                </Container>
            </Row>
            <Row>
                <Container>
                    <div className="overflow-auto">
                        <p>
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
                        </p>
                        <p>
                            This should prompt your email client (Microsoft Outlook, Apple Mail, ...) to create a new email with partially filled content.
                            Please answer the questions in the mail, and send it to GHGA Helpdesk (dac-ghga@ghga.de).
                            If your email client doesn't open, please copy paste the following text and send it to GHGA Helpdesk (dac-ghga@ghga.de).
                        </p>
                        Add image here
                    </div>
                </Container>
            </Row>
            <Row>
                <Container>
                    <div className="overflow-auto">
                        <p>
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
                        </p>
                        <p>
                            After your communication with Data Owner, you will get permission for interested datasets. <br />

                        </p>
                        <p className="fw-bold">
                            Note: GHGA Metadata Catalog does not resposible for data accesion
                        </p>

                    </div>
                </Container>
            </Row>
            <Row>
                <Container>
                    <div className="overflow-auto">
                        <p className="fw-bold">
                            Additional Information:
                        </p>
                        <p>
                            Requesting Multiple Datasets:
                        </p>
                        <p>
                            If you want to request all datasets from a study, you can send a request for the whole study with a single email. <br />
                            If you are interested in multiple datasets under the same use case, you can send us a single email, and list the datasets IDs you want to access, and answer questions once. <br />
                            If you are interested in multiple dataset for different use cases, please send separate emails for each use case. <br />
                        </p>
                    </div >
                </Container >
            </Row >
        </div >
    );
};

export default Download;
