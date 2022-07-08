import { Col, Row } from "react-bootstrap";
import banner1 from "../../assets/aboutUs/about-banner.png";
import cooperations from "../../assets/aboutUs/ghga-cooperations.png";
import banner2 from "../../assets/aboutUs/about-banner2.png";

const AboutUs = () => {
  return (
    <div>
      <Row
        className="bg-primary m-0 mb-4 py-4 px-3"
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        <Col className="fw-bold text-white col-10">
          <p className="fs-5 mb-2">About GHGA Beta</p>
          <div
            className="border border-1 border-white mb-2"
            style={{ width: "60px" }}
          ></div>
          <p className="ps-3 mb-5">
            The German Human Genome-Phenome Archive is a consortium under the
            umbrella of the NFDI Association, building a national federated
            infrastructure to store and share human omics data.
          </p>
        </Col>
      </Row>
      <Row className="m-0 align-items-center mb-4 px-4">
        <Col className="col-7">
          <p className="fs-5 fw-bold mb-5">What is the GHGA Data Portal?</p>
          <p>
            The GHGA Data Portal is currently being developed to allow data
            download request over the portal in the future. Currently we are
            running a pilot project named the GHGA Metadata Browser. This pilot
            project has been released on xxx. You can access the GHGA Metadata
            Browser <a href="/browse">here</a>. You can find our Github
            repository here <a href="##">here</a>.
          </p>
        </Col>
        <Col className="text-center col-5">
          <img src={cooperations} alt="GHGA Cooperations" className="w-100" />
        </Col>
      </Row>
      <Row
        className="m-0 bg-primary py-5 mb-4 ps-4 pe-5"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "100% auto",
          backgroundBlendMode: "multiply",
        }}
      >
        <Col className="text-white pe-4">
          <p className="fw-bold mb-4">
            What are the functions of the GHGA Metadata Browser and what to
            expect from GHGA beta?
          </p>
          <p className="mb-4">
            The GHGA Metadata Browser allows to browse, search, and filter
            biological datasets submitted to the GHGA Data Portal. It uses the{" "}
            <a href="##" className="text-white">
              GHGA Metadata Model
            </a>{" "}
            and conforms with the{" "}
            <a href="##" className="text-white">
              EGA Metadata Model
            </a>
            .
          </p>
        </Col>
      </Row>
      <Row className="m-0 ps-4">
        <Col>
          <Row className="mb-4">
            <p className="fw-bold">What data can be found in?</p>
            <p>
              The GHGA Metadata Browser does not currently contain any datasets,
              if you would like to contribute data, check <a href="##">Data Upload</a>
              for more information.
            </p>
          </Row>
          <Row className="mb-4">
            <p className="fw-bold">How to browse / filter / search data?</p>
            <p className="ps-4">
              explain functions, possibly with screenshots here
              <br />
              browse: by default all available datasets are listed
              <br />
              filtering: datasets can be filtered on study type and experimental
              method,
              <br />
              combining of different filters: removing filters
              <br />
              searching: use the search bar on the top left to search datasets
              for keywords
            </p>
          </Row>
          <Row className="mb-4">
            <p className="fw-bold">
              What metadata will be/can be displayed about the datasets of
              interest?
            </p>
            <p>
              For more information on the GHGA Metadata model, see{" "}
              <a href="##">here</a>.
            </p>
          </Row>
          <Row className="mb-4">
            <p className="fw-bold">How to register for the GHGA Data Portal?</p>
            <p>
              There is currently no registration required to use the GHGA
              Metadata Browser.
            </p>
          </Row>
          <Row className="mb-4">
            <p className="fw-bold">How to request access to datasets?</p>
            <p>
              Identify your dataset of interest using the browse and filter
              functions of the <a href="/">GHGA Data Portal</a>. Click on the
              dataset of interest and then click on the "Request access" button.
              This will prompt your email client to open with an email template
              to the GHGA Helpdesk. Fill in the necessary information and send
              the email to dac-ghga@ghga.de.
              <br />
              <br />
              For more information refer to the{" "}
              <a href="##">Data download page</a>.
            </p>
          </Row>
          <Row>
            <p className="fw-bold">How to upload and download data?</p>
            <p>
              For more information refer to the <a href="##">Data Upload</a> and{" "}
              <a href="##">Data Download</a> pages.
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
