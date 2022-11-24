import { Col, Row } from "react-bootstrap";
import { importAllFilesFromFolder } from "../../../utils/utils";

const InstitutionsCarousel = () => {
  const listInstitutionImages: any = importAllFilesFromFolder(
    require.context("../../../assets/upload/institutions/", false, /\.png$/)
  );
  return (
    <Row className="w-100 m-0 mb-3">
      <Col>
        <h4 className="fw-bold fs-3 p-3 pb-1">Our Partners</h4>
        <hr className="mx-3 border-tertiary mb-4 opacity-100" />
        <div className="d-flex justify-content-center align-items-center w-100 flex-wrap mb-5">
          {listInstitutionImages.map((x: any) => (
            <div key={x} className="text-center" style={{minWidth: "20rem"}}>
              <img src={x} alt="Institution" className="me-4 my-2" style={{maxHeight: "15rem"}} />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default InstitutionsCarousel;
