import { Col, Row } from "react-bootstrap";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { importAllFilesFromFolder } from "../../../utils/utils";

const InstitutionsCarousel = () => {
  const listInstitutionImages: any = importAllFilesFromFolder(
    require.context("../../../assets/homepage/institutions/", false, /\.png$/)
  );
  return (
    <Row className="w-100 m-0 mb-3">
      <Col>
        <h4 className="fw-bold fs-3 p-3 pb-1">Our Partners</h4>
        <hr className="mx-3 border-tertiary mb-4 opacity-100" />
        <a href="https://www.ghga.de/mission/partners-1">
          <Swiper
            slidesPerView={6}
            navigation
            autoplay={{
              delay: 4900,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            spaceBetween={85}
            loop
            pagination={{ clickable: true }}
            speed={800}
            centeredSlides
            loopAdditionalSlides={5}
            modules={[Navigation, Autoplay, Pagination]}
            className="my-2 pb-5"
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
    </Row>
  );
};

export default InstitutionsCarousel;
