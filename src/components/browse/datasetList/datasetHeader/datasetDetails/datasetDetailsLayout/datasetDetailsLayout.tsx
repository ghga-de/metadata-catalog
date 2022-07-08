import React from "react";
import { Row, Col } from "react-bootstrap";

interface dataSetDetailsLayoutProps {
  icon: JSX.Element;
  content: any;
}

const DatasetDetailsLayout = (props: dataSetDetailsLayoutProps) => {
  return (
    <Col className="me-2">
    <Row>
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
