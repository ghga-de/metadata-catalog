import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import uploadImg from "../../assets/upload/upload.png";
import { importAllFilesFromFolder, static_page_img_col_classes, static_page_img_row_classes, static_page_main_div_classes } from "../../utils/utils";

const Upload = () => {
  const listPartnersImages: any = importAllFilesFromFolder(
    require.context("../../assets/upload/partners/", false, /\.png$/)
  );

  return (
    <div className={static_page_main_div_classes}>
      <h5 className="d-flex align-items-center text-secondary fw-bold">
        <FontAwesomeIcon
          icon={faCloudArrowUp}
          pull="left"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "rgba(214,95,48,0.2)",
            padding: "8px",
          }}
          className="me-3 fs-4 rounded"
        />
        How to Submit Data
      </h5>
      <hr className="border-secondary mb-4" />
      <p>
        The GHGA Data Portal is currently being developed, and will allow data
        upload request over the portal in the future. Currently we are running a
        pilot project named GHGA Metadata Catalog, working with partner
        institutions to collect dataset. If you are located at a GHGA Partner
        Institute and would like to upload your metadata to the GHGA Metadata
        Catalog, please contact the GHGA Helpdesk at{" "}
        <strong>helpdesk[at]ghga[dot]de</strong>.
      </p>
      <p>
        We are collecting the anonymous dataset metadata following the GHGA
        Metadata Model, and keep it interoperable with the EGA Metadata Model.{" "}
      </p>
      <Row className={static_page_img_row_classes}>
        <Col className={static_page_img_col_classes}>
          <img src={uploadImg} alt="upload" className="w-100" />
        </Col>
      </Row>
      <p className="mb-4">
        As a research network, GHGA has multiple cooperations with national and
        international partners. Some of our partners:
      </p>
      <Row className="justify-content-center align-items-center w-100 mb-5 mx-0">
        {listPartnersImages.map((x: any) => (
          <Col key={x} className="text-center" xs={4} sm={3} md={2} xxl={1}>
            <img src={x} alt="Institution" className="me-md-4 my-2 w-100" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Upload;
