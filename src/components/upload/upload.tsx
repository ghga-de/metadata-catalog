import { Col, Row } from "react-bootstrap";
import banner1 from "../../assets/aboutUs/about-banner.png";
import banner2 from "../../assets/aboutUs/about-banner2.png";
import { Link } from "react-router-dom";

const Upload = () => {
    return (
        <div className="mx-auto w-75 px-5 mt-4">
            <Row
                className="bg-primary m-0 mb-4 py-4 px-3"
                style={{
                    backgroundImage: `url(${banner1})`,
                    backgroundRepeat: "no-repeat no-repeat",
                    backgroundSize: "100% auto",
                }}
            >
                <Col className="fw-bold text-white col-11">
                    <p className="fs-5 mb-2">About GHGA Beta</p>
                    <div
                        className="border border-1 border-white mb-2"
                        style={{ width: "60px" }}
                    ></div>
                    <p className="ps-3 mb-3">
                        The German Human Genome-Phenome Archive is a research consortium, building a national federated data infrastructure to store and share human omics data, providing a robust ethical and legal framework for FAIR data use. As part of the&nbsp;
                        <a href="https://www.nfdi.de/?lang=en" className="text-white" target="_blank" rel="noreferrer">
                            National Research Data Infrastructure
                        </a>, GHGA is funded by the DFG and tightly embedded within national and international infrastructures.

                        <br />Please visit&nbsp;
                        <a href="https://www.ghga.de/" className="text-white" target="_blank" rel="noreferrer">
                            GHGA website
                        </a>
                        &nbsp;for more information.
                    </p>
                </Col>
            </Row>
            <Row className="m-0 align-items-center mb-4 px-3 py-4">
                <Col className="col-11">
                    <p className="fs-5 fw-bold mb-2">About GHGA Metadata Catalog</p>
                    <div
                        className="border border-1 border-white mb-2"
                        style={{ width: "60px" }}
                    ></div>
                    <p className="ps-3 mb-3">
                        GHGA Catalog is the first phase of the GHGA project and the GHGA Metadata Catalog is a product of this phase. The aim is to facilitate the findability of research data from German research institutions, and allow researchers to browse and identify suitable datasets. Researchers can then apply to access the datasets. Research data described in the GHGA Metadata Catalog can either be published studies (e.g. those for which the research data has already been deposited at EGA) or unpublished research data that has yet to be published via other infrastructures that are potentially subject to active change and further development.
                        During this Catalog phase, GHGA will only store non-personal metadata, while the management of the associated personal research data (i.e. the sequencing data) will be the responsibility of the data controller.
                    </p>
                </Col>
            </Row>
            <Row
                className="bg-primary m-0 mb-4 py-4 px-3"
                style={{
                    backgroundImage: `url(${banner2})`,
                    backgroundRepeat: "no-repeat no-repeat",
                    backgroundSize: "100% auto",
                    backgroundBlendMode: "multiply",
                }}
            >
                <Col className="fw-bold text-white col-11">
                    <p className="fs-5 mb-2">
                        Within the project plan of GHGA, the GHGA Catalog phase fulfils the role of an early demonstrator to:
                    </p>
                    <div
                        className="border border-1 border-white mb-2"
                        style={{ width: "60px" }}
                    ></div>
                    <p className="ps-3 mb-3">
                        1) Provide the first public-facing service (“the GHGA Metadata Catalog”) to make human omics datasets from Germany findable to researchers, <br />
                        2) Provide a testbed for the delivery of core GHGA functionalities and the interplay between software architecture, metadata, legal processes, and data stewardship, and <br />
                        3) Demonstrate to data producers the value of depositing their research data with GHGA in the future. <br /> <br />

                        In the next phase of GHGA, entitled GHGA Archive, GHGA will archive personal research data on behalf of the data controllers and will make those data findable via the GHGA Metadata Catalog.
                    </p>
                </Col>
            </Row>
            <Row className="m-0 ps-4">
                <Col>
                    <Row className="mb-4">
                        <p className="fs-5 mb-2 fw-bold">FAQ</p>
                    </Row>
                    <Row className="mb-4">
                        <p className="fw-bold">What are the functions of the GHGA Metadata Catalog?</p>
                        <p>
                            The GHGA Metadata Catalog allows users to browse, search, and filter omics datasets submitted to the GHGA. It uses the GHGA Metadata Model and conforms with the&nbsp;
                            <a href="https://ega-archive.org/submission/programmatic_submissions/submitting-metadata" target="_blank" rel="noreferrer">
                                EGA Metadata Model
                            </a>
                        </p>
                    </Row>
                    <Row className="mb-4">
                        <p className="fw-bold">What data can be found on GHGA Metadata Catalog?</p>
                        <p>
                            Please visit the GHGA Metadata Catalog&nbsp;
                            <Link to="/browse" target="_blank" rel="noreferrer">
                                browse page
                            </Link>
                            &nbsp;and find your data of interest either by a keyword search or by using the selectors on the left side.
                            Currently, we are only displaying datasets from partner institutions.
                            If you would like to contribute your own data, please visit&nbsp;
                            <Link to="/upload" target="_blank" rel="noreferrer">
                                Data Upload.
                            </Link>

                        </p>
                    </Row>
                    <Row className="mb-4">
                        <p className="fw-bold">
                            What metadata will be/can be displayed about the datasets of
                            interest?
                        </p>
                        <p>
                            For more information on the GHGA Metadata model, see&nbsp;
                            <Link to="/metadata-model" target="_blank" rel="noreferrer">
                                metadata model
                            </Link>
                        </p>
                    </Row>
                    <Row className="mb-4">
                        <p className="fw-bold">How to request access to datasets?</p>
                        <p>
                            Identify your dataset of interest using the browse and filter functions of the GHGA Metadata Catalog.
                            Navigate to the dataset of interest and then click on the "Request access" button.
                            This will prompt your email client to open with an email template to the data access committee or the responsible person for the dataset.
                            Fill in the necessary information and send the email to the data access committee email listed on the dataset.
                            Please note that GHGA is not involved in the process of negotiating the data access.
                        </p>
                    </Row>
                    <Row className="mb-4">
                        <p className="fw-bold">How to upload your data to GHGA Metadata Catalog?</p>
                        <p>
                            During this initial phase of operation, GHGA is only accepting metadata from partner institutions.
                            For more information, please visit the&nbsp;
                            <Link
                                to="/upload"
                            >
                                Data Upload page
                            </Link>
                        </p>
                    </Row>
                    <Row>
                        <p className="fw-bold">Data Download Page</p>
                        <p>
                            The GHGA Data Portal is currently being developed to allow data download requests over the portal in the near future.
                            During this early phase of the project, called GHGA Metadata Catalog, we are listing non-personal metadata and acting as a gateway to data submitters who will serve the research data upon approval of the request.
                            Visit your dataset of interest and then click on the "Request access" button.
                            This will prompt your email client to open with an email template to the data access committee for the dataset.
                            Fill in the necessary information and send the email to the data access committee email listed on the dataset.
                            Please note that GHGA is not involved in the further process of negotiating the data access.
                            For more information, please visit the&nbsp;
                            <Link
                                to="/download"
                            >
                                Data Download page
                            </Link>
                        </p>
                    </Row>
                    <Row>
                        <p className="fw-bold">Data Upload Page</p>
                        <p>
                            The GHGA Data Portal is currently being developed to allow data upload requests over the portal in the near future.
                            During this early phase of the project, called GHGA Metadata Catalog, metadata on datasets is only collected from our partner institutions.
                            If you are located at a GHGA partner institute and would like to upload your metadata to GHGA Metadata Catalog, please contact the GHGA Helpdesk at ghga-office@dkfz-heidelberg.de
                        </p>
                        <p>
                            We are collecting the anonymous dataset metadata following the GHGA Metadata Model, and keep it interoperable with the EGA Metadata Model.
                        </p>
                    </Row>
                </Col >
            </Row >
        </div >
    );
};

export default Upload;
