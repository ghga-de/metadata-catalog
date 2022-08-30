import {
  faCircleExclamation,
  faCopy,
  faDownload,
  faCircleInfo,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Modal,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";

interface DataRequestModalProps {
  accession: string;
  copyEmail: string;
  show: boolean;
  handleClose: any;
  dacFormLink: string | null;
}

const DataRequestModal = (props: DataRequestModalProps) => {
  const emailMessage: string = "Copy e-mail to clipboard";
  const subjectMessage: string = "Copy subject to clipboard";
  const bodyMessage: string = "Copy e-mail body to clipboard";
  const copiedMessage: string = "Copied!";

  const [emailTooltipString, setEmailTooltipString] =
    React.useState<string>(emailMessage);
  const [subjectTooltipString, setSubjectTooltipString] =
    React.useState<string>(subjectMessage);
  const [bodyTooltipString, setBodyTooltipString] =
    React.useState<string>(bodyMessage);

  const listSetFunctions = [
    setEmailTooltipString,
    setSubjectTooltipString,
    setBodyTooltipString,
  ];
  const listMessages = [emailMessage, subjectMessage, bodyMessage];

  async function setCopiedMessage(index: number) {
    listSetFunctions[index](copiedMessage);
    listSetFunctions.forEach((_, i) => {
      if (index !== i) {
        listSetFunctions[i](listMessages[i]);
      } else {
        listSetFunctions[i](copiedMessage);
      }
    });
    await new Promise((r) => setTimeout(r, 8000));
    listSetFunctions[index](listMessages[index]);
  }

  const subject: string = "Request access for dataset " + props.accession;

  const body: string =
    `Dear DAC team,\n\n` +
    `I am interested in accesing the dataset ${props.accession} which is listed in the GHGA Metadata Catalogue. ` +
    `Further details of the nature of my project relating to the request are specified in the form attached to this email. ` +
    `Please could you reply to me as soon as you are able to discuss my proposed project.\n` +
    `Thank you.\n\n` +
    `Kind regards`;

  const requestAccess = () => {
    window.location.assign(
      `mailto:${props.copyEmail}?subject=${subject}&body=${encodeURIComponent(
        body
      )}`
    );
  };

  const renderTooltip = (message: string) => (
    <Tooltip id={message} key={props.accession + "_modal_message"}>{message}</Tooltip>
  );

  return (
    <Modal size="lg" centered show={props.show} onHide={props.handleClose} key={props.accession + "_modal"}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>
          <FontAwesomeIcon icon={faDownload} className="text-muted me-3" />
          <strong>How to request access for dataset {props.accession}</strong>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4">
        <Row className="mb-2 p-3 bg-gray align-items-center rounded">
          <Col
            lg={"auto"}
            md={"auto"}
            sm={"auto"}
            xl={"auto"}
            xs={"auto"}
            xxl={"auto"}
            className="p-0"
          >
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-danger"
              size="2x"
            />
          </Col>
          <Col>
            To request access, you will need to contact the indicated Data
            Access Committee (DAC) which is responsible for approving
            applications for this dataset. Please copy the message below and
            send it via email to <strong>{props.copyEmail}</strong>.
            <br />
            If configured, you can click on ‘Open Mail Client’ to open the
            message in your preferred email client. Please add any additional
            details if necessary. As part of this process, GHGA does not receive
            a copy of your email or any other of your personal data. GHGA has no
            role in approving or rejecting data access requests since this is
            the sole responsibility of the DAC named by the data controller.
          </Col>
        </Row>
        {props.dacFormLink !== null ? (
          <Row className="p-3 bg-light align-items-center rounded">
            <Col
              lg={"auto"}
              md={"auto"}
              sm={"auto"}
              xl={"auto"}
              xs={"auto"}
              xxl={"auto"}
              className="p-0"
            >
              <FontAwesomeIcon
                icon={faFileSignature}
                className="text-muted"
                size="2x"
              />
            </Col>
            <Col>
              This DAC uses the following form to collect request information.
              Please download, fill and attach it to your email:{" "}
              <a href={props.dacFormLink}>DAC Form Link</a>
            </Col>
          </Row>
        ) : (
          ""
        )}
        <Row className="align-items-center py-2">
          <Col
            lg={"auto"}
            md={"auto"}
            sm={"auto"}
            xl={"auto"}
            xs={"auto"}
            xxl={"auto"}
            className="text-center pe-0"
          >
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-info"
              size="2x"
            />
          </Col>
          <Col>
            <Row>
              <OverlayTrigger
                placement="top-end"
                delay={{ show: 100, hide: 1000 }}
                overlay={renderTooltip(emailTooltipString)}
                rootClose={true}
              >
                <Col><CopyToClipboard text={props.copyEmail}>
                  <Col
                    lg={"auto"}
                    md={"auto"}
                    sm={"auto"}
                    xl={"auto"}
                    xs={"auto"}
                    xxl={"auto"}
                    className="pe-0"
                    style={{ cursor: "pointer" }}
                  >
                    <strong>To: </strong>
                    <span onMouseDown={() => setCopiedMessage(0)}>
                      {props.copyEmail}
                    </span>
                  </Col>
                </CopyToClipboard></Col>
              </OverlayTrigger>
              <Col
                className="text-end ps-0"
                lg={"auto"}
                md={"auto"}
                sm={"auto"}
                xl={"auto"}
                xs={"auto"}
                xxl={"auto"}
              >
                <OverlayTrigger
                  placement="top-start"
                  delay={{ show: 100, hide: 1000 }}
                  overlay={renderTooltip(emailTooltipString)}
                  rootClose={true}
                >
                  <Col><CopyToClipboard text={props.copyEmail}>
                    <Button
                      id={"email_address"}
                      variant="outline-dark"
                      size="sm"
                      className="px-1 ms-1 py-1 border-0 my-0"
                      onMouseDown={() => setCopiedMessage(0)}
                    >
                      <FontAwesomeIcon icon={faCopy} transform="up-6" />
                    </Button>
                  </CopyToClipboard></Col>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row>
              <OverlayTrigger
                placement="top-end"
                delay={{ show: 100, hide: 1000 }}
                overlay={renderTooltip(subjectTooltipString)}
                rootClose={true}
              >
                <Col><CopyToClipboard text={subject}>
                  <Col
                    lg={"auto"}
                    md={"auto"}
                    sm={"auto"}
                    xl={"auto"}
                    xs={"auto"}
                    xxl={"auto"}
                    className="pe-0"
                    style={{ cursor: "pointer" }}
                  >
                    <strong>Subject: </strong>

                    <span onMouseDown={() => setCopiedMessage(1)}>
                      {subject}
                    </span>
                  </Col>
                </CopyToClipboard></Col>
              </OverlayTrigger>
              <Col
                className="text-end ps-0"
                lg={"auto"}
                md={"auto"}
                sm={"auto"}
                xl={"auto"}
                xs={"auto"}
                xxl={"auto"}
              >
                <OverlayTrigger
                  placement="top-start"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderTooltip(subjectTooltipString)}
                  rootClose={true}
                >
                  <Col><CopyToClipboard text={subject}>
                    <Button
                      id={"subject"}
                      variant="outline-dark"
                      size="sm"
                      className="px-1 ms-1 py-1 border-0 my-0"
                      onMouseDown={() => setCopiedMessage(1)}
                    >
                      <FontAwesomeIcon icon={faCopy} transform="up-6" />
                    </Button>
                  </CopyToClipboard></Col>
                </OverlayTrigger>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border border-light border-3 rounded rounded-3 my-2 py-1">
          <OverlayTrigger
            placement="auto"
            delay={{ show: 100, hide: 400 }}
            overlay={renderTooltip(bodyTooltipString)}
            rootClose={true}
          >
            <Col><CopyToClipboard text={body}>
              <Col style={{ cursor: "pointer" }}>
                <p onMouseDown={() => setCopiedMessage(2)}>
                  {body.split("\n").map((string, idx) => (
                    <span key={props.accession + "_modal_request_body_text_ln_" + idx}>
                      {string}
                      <br />
                    </span>
                  ))}
                </p>
              </Col>
            </CopyToClipboard></Col>
          </OverlayTrigger>
          <Col
            className="text-end pe-2"
            lg={1}
            md={1}
            sm={1}
            xl={1}
            xs={1}
            xxl={1}
          >
            <OverlayTrigger
              placement="top-start"
              delay={{ show: 100, hide: 400 }}
              overlay={renderTooltip(bodyTooltipString)}
              rootClose={true}
            >
              <Col><CopyToClipboard text={body}>
                <Button
                  id={"email body"}
                  variant="outline-dark"
                  className="px-1 ms-1 py-1 border-0 my-0"
                  onMouseDown={() => setCopiedMessage(2)}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </Button>
              </CopyToClipboard></Col>
            </OverlayTrigger>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Col className="px-4">
          <Button
            variant="outline-dark"
            onClick={props.handleClose}
            className="w-100"
          >
            Cancel
          </Button>
        </Col>
        <Col className="pe-4">
          <Button className="w-100 text-white" onClick={() => requestAccess()}>
            Open Mail Client
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

export default DataRequestModal;
