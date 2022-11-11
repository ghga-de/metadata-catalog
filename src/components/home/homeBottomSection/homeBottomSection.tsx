import { Button, Carousel, Col, Row } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import projects from "./communities&standards.json";

const HomeBottomSection = () => {
  return (
    <Row className="mx-2 mb-3">
      <Col>
        <h4 className="fw-bold fs-3 p-3 pb-1">Our Standards</h4>
        <hr className="mx-3 border-primary mb-5" />
        <Carousel indicators={false} variant="dark" interval={null}>
          {projects
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((x, idx) => (
              <Carousel.Item key={"homepage_projects_" + idx}>
                <div className="px-5 mx-5">
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
                        className="shadow-md-dark border-secondary text-secondary my-4 fw-bold"
                        href={x.learn_more_href}
                      >
                        Learn more...
                      </Button>
                    ) : (
                      <Button
                        variant="white"
                        className="my-4 bg-white pe-none"
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

export default HomeBottomSection;
