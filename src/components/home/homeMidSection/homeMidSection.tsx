import { Row, Col, Carousel, Button } from "react-bootstrap";
import projects from "./communities&standards.json";
import bundeslaender from "../../../assets/homepage/Bundeslaender.svg";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const HomeMidSection = () => {
  return (
    <Row className="mx-2 mb-3">
      <Col
        className="bg-primary rounded text-white"
        style={{
          backgroundImage: `url(${bundeslaender})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "450px",
          backgroundPosition: "left 50px top -295px",
          height: "425px",
        }}
      >
        <h4 className="mb-4 fw-bold fs-3 p-3 pb-2">
          Our Communities and Standards
        </h4>
        <Carousel indicators={false}>
          {projects
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((x, idx) => (
              <Carousel.Item key={"homepage_projects_" + idx}>
                <div className="px-5 mx-2">
                  <h4 className="fw-bold">{x.name}</h4>
                  <Row>
                    {x.img_location === "" ? (
                      <Col
                        className="overflow-auto"
                        style={{ height: "200px" }}
                      >
                        <PerfectScrollbar>
                          <p>
                            {x.description.split("\n").map((z, idz) => (
                              <span
                                key={
                                  "homepage_span_" +
                                  x.name +
                                  "_description_" +
                                  idz
                                }
                              >
                                {z}
                                <br />
                              </span>
                            ))}
                          </p>
                        </PerfectScrollbar>
                      </Col>
                    ) : (
                      <>
                        <Col
                          className="col-7 overflow-auto"
                          style={{ height: "200px" }}
                        >
                          <PerfectScrollbar>
                            <p>
                              {x.description.split("\n").map((z, idz) => (
                                <span
                                  key={
                                    "homepage_span_" +
                                    x.name +
                                    "_description_" +
                                    idz
                                  }
                                >
                                  {z}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </PerfectScrollbar>
                        </Col>
                        <Col>
                          <img src={x.img_location} alt={x.img_alt} />
                        </Col>
                      </>
                    )}
                  </Row>
                  <div className="text-center">
                    {x.learn_more_href !== "" ? (
                      <Button
                        as="a"
                        target="_blank"
                        variant="white"
                        className="shadow-md-dark text-secondary my-4 fw-bold"
                        href={x.learn_more_href}
                      >
                        Learn more...
                      </Button>
                    ) : (
                      <Button
                        className="my-4 bg-primary pe-none"
                        href={x.learn_more_href}
                      >
                        &nbsp;
                      </Button>
                    )}
                  </div>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default HomeMidSection;
