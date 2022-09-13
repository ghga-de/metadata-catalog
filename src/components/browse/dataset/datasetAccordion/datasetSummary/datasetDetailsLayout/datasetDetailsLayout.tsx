import React from "react";
import { Row, Col } from "react-bootstrap";

interface dataSetDetailsLayoutProps {
  icon: JSX.Element;
  content: any;
}

const DatasetDetailsLayout = (props: dataSetDetailsLayoutProps) => {
  return (
    <Col className="me-2 pb-4 mt-2" style={{minHeight: "100px"}}>
      <Row className="w-100 flex-nowrap">
        <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto" xxl="auto" className="pe-2 pt-2 fs-1 text-muted">
          {props.icon}
        </Col>
        <Col className="">
          {props.content}
        </Col>
      </Row>
    </Col>
  );
};

export default DatasetDetailsLayout
