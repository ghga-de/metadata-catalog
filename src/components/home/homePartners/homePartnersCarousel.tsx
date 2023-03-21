import { Col, Row } from "react-bootstrap";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { importAllFilesFromFolder } from "../../../utils/utils";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HomePartnersCarousel = () => {
  const listPartnersImages: any = importAllFilesFromFolder(
    require.context("../../../assets/upload/partners/", false, /\.png$/)
  );
  const [prevEl, setPrevEl] = React.useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = React.useState<HTMLElement | null>(null);

  const carouselHeight = "100px";
  return (
    <Row className="w-100 py-lg-3">
      <Col>
        <h4 className="fw-bold fs-3 p-3 pb-1">Our Partners</h4>
        <hr className="mx-3 border-tertiary mb-4 opacity-100" />
        <Row className="justify-content-center flex-nowrap">
          <Col xs="auto" className="d-flex align-items-center">
            <div ref={(node) => setPrevEl(node)}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-quaternary"
                pull="left"
                style={{
                  height: "30px",
                }}
              />
            </div>
          </Col>
          <Col xs={10}>
            <a href="https://www.ghga.de/mission/partners-1">
              <Swiper
                breakpoints={{
                  1: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // sm
                  576: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // md
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // lg
                  992: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                  // xl
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                  },
                  // xxl
                  1400: {
                    slidesPerView: 7,
                    spaceBetween: 50,
                  },
                }}
                navigation={{ prevEl, nextEl }}
                autoplay={{
                  delay: 4900,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop
                speed={500}
                centeredSlides
                modules={[Navigation, Autoplay]}
                className="my-2"
              >
                {listPartnersImages
                  .map((value: any) => ({ value, sort: Math.random() }))
                  .sort((a: any, b: any) => a.sort - b.sort)
                  .map(({ value }: any) => value)
                  .map((x: any, idx: number) => (
                    <SwiperSlide
                      key={"institution_carousel_item_" + idx}
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: carouselHeight }}
                    >
                      <div className="text-center">
                        <img
                          src={x}
                          alt="Institution"
                          className="w-100"
                          style={{ maxHeight: carouselHeight }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </a>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <div className="mx-auto" ref={(node) => setNextEl(node)}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-quaternary"
                pull="right"
                style={{
                  height: "30px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomePartnersCarousel;
