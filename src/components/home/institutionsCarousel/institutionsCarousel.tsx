import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import { importAllFilesFromFolder } from "../../../utils/utils";

const InstitutionsCarousel = () => {
  const listInstitutionImages: any = importAllFilesFromFolder(
    require.context("../../../assets/homepage/institutions/", false, /\.png$/)
  );
  return (
    <Row className="w-100 m-0 mb-3">
      <Col>
        <Swiper
          slidesPerView={6}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          spaceBetween={85}
          loop
          pagination={{ clickable: true }}
          speed={1500}
          centeredSlides
          loopAdditionalSlides={5}
          modules={[Navigation, Autoplay, Pagination]}
          className="my-2 pb-4"
        >
          {listInstitutionImages
            .map((value: any) => ({ value, sort: Math.random() }))
            .sort((a: any, b: any) => a.sort - b.sort)
            .map(({ value }: any) => value)
            .map((x: any, idx: number) => (
              <SwiperSlide
                key={"institution_carousel_item_" + idx}
                className="d-flex align-items-center"
                style={{ height: "125px" }}
              >
                <div className="">
                  <img src={x.default} alt="Institution" className="w-100" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Col>
    </Row>
  );
};

export default InstitutionsCarousel;
