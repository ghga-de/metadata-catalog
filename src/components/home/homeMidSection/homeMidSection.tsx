import { Row, Col, Carousel, Button, Spinner } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import projects from "./communities&standards.json";
import bundeslaender from "../../../assets/homepage/Bundeslaender.svg";

const HomeMidSection = () => {
  return (
    <Row className="w-100 m-0 mb-3">
      <Col
        className="col-8 bg-primary rounded text-white"
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
                        <p>
                          {x.description.split("\n").map((z,idz) => (
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
                      </Col>
                    ) : (
                      <>
                        <Col
                          className="col-7 overflow-auto"
                          style={{ height: "200px" }}
                        >
                          <p>
                            {x.description.split("\n").map((z,idz) => (
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
                        className="shadow-md-dark text-secondary my-4"
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
      <Col className="rounded">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GHGA_DE"
          noFooter
          options={{ height: 425 }}
          placeholder={
            <>
              <Spinner animation="border" size="sm" variant="info" />
              &nbsp;Loading{" "}
              <a href="https://twitter.com/GHGA_DE">
                GHGA Twitter timeline
              </a>{" "}
              ...
              <br />
              You may need to disable blocking of third-party cookies for this
              element to display correctly.
            </>
          }
        />
      </Col>
    </Row>
  );
};

export default HomeMidSection;
