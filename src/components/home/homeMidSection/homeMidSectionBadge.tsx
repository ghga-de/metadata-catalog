import { Card, Col, Row } from "react-bootstrap";

interface HomeMidSectionBadgeProps {
    badgeTitle: any,
    badgeBody: any,
    bodyRowClasses: string,
    bodyColClasses: string,
    badgeClasses: String,
}

const HomeMidSectionBadge = (props: HomeMidSectionBadgeProps) => {
    return (
        <Card
            style={{ width: "16rem", borderRadius: "15px" }}
            className={"d-inline-block shadow mx-2 p-1 " + props.badgeClasses}
        >
            <Card.Body>
                <Card.Title className="fw-bold">
                    {props.badgeTitle}
                </Card.Title>
                <Card.Text as="div">
                    <Row className={props.bodyRowClasses}>
                        <Col className={props.bodyColClasses}>
                            {props.badgeBody}
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomeMidSectionBadge;
