import { Col, Row } from "react-bootstrap";
import {Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { importAllFilesFromFolder } from "../../../utils/utils";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";

const InstitutionsCarousel = () => {
    const listInstitutionImages: any = importAllFilesFromFolder(
        require.context("../../../assets/upload/institutions/", false, /\.png$/)
    );
    const [prevEl, setPrevEl] = React.useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = React.useState<HTMLElement | null>(null)
    return (
        <Row className="w-100 py-5">
            <Col>
                <h4 className="fw-bold fs-3 p-3 pb-1">Our Partners</h4>
                <hr className="mx-3 border-tertiary mb-4 opacity-100" />
                <Row className="justify-content-center flex-nowrap">
                    <Col xs="auto" className="d-flex align-items-center">
                        <div  ref={(node) => setPrevEl(node)}>
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
                                slidesPerView={6}
                                navigation={{ prevEl, nextEl }}
                                autoplay={{
                                    delay: 4900,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                spaceBetween={85}
                                loop
                                speed={800}
                                centeredSlides
                                loopAdditionalSlides={5}
                                modules={[Navigation, Autoplay]}
                                className="my-2"
                            >
                                {listInstitutionImages
                                    .map((value: any) => ({ value, sort: Math.random() }))
                                    .sort((a: any, b: any) => a.sort - b.sort)
                                    .map(({ value }: any) => value)
                                    .map((x: any, idx: number) => (
                                        <SwiperSlide
                                            key={"institution_carousel_item_" + idx}
                                            className="d-flex align-items-center"
                                            style={{ height: "150px" }}
                                        >
                                            <div className="">
                                                <img src={x} alt="Institution" className="w-100" />
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

export default InstitutionsCarousel;
