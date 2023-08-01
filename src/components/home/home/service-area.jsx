import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// slider_content
const slider_content = [
    {
        id: 1,
        color: "",
        link: "digital-pathology",
        icon: "flaticon-hemoglobin-test-meter",
        title: "Digital Pathology ",
        des: "The imaging study conducted by CBRS Biobank represents an unprecedented endeavour to capture detailed images of the body&apos;s internal structures.",
    },
    {
        id: 2,
        color: "pink-icon",
        link: "histopathology",
        btn_color: "pink-hexa",
        icon: "flaticon-blood-test",
        title: "Histopathology",
        des: `Our biobank's histopathology services offer a comprehensive range of support to researchers, ensuring they have access to essential.`,
    },
    {
        id: 3,
        color: "green-icon",
        link: "genomics",
        btn_color: "green-hexa",
        icon: "flaticon-biochemistry",
        title: "Genomics",
        des: "Our biobank repository of genomics offers a comprehensive range of services catering to various categories,",
    },
    {
        id: 4,
        color: "sky-icon",
        link: "proteomics",
        btn_color: "sky-hexa",
        icon: "flaticon-dna-1",
        title: "Proteomics",
        des: "Our biobank repository of proteomics offers a diverse collection of services catered to different categories, providing researchers with valuable.",
    },
    {
      id: 5,
      color: "sky-icon",
      link: "bioinformatics",
      btn_color: "sky-hexa",
      icon: "flaticon-dna-1",
      title: "Bioinformatics",
      des: "CBRS offers a comprehensive suite of bioinformatics services that are instrumental in extracting meaningful insights from complex biological data.",
  },
  {
    id: 6,
    color: "sky-icon",
    link : "generation-sequencing-ngs",
    btn_color: "sky-hexa",
    icon: "flaticon-dna-1",
    title: "Generation Sequencing (NGS)",
    des: "Our services include targeted exploration of pathogenic genetic variants using short read",
},
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        className="services-area pt-65 pb-90 grey-bg mt-60 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row mb-95">
            <div className="col-lg-12">
              <div className="search-form">
                <form action="#">
                  <input type="text" placeholder="What are you looking for?" />
                  <button className="tp-btn search-btn" type="submit">
                    Search Here
                    <i className="fa-light fa-magnifying-glass ml-5"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-50">Laboratory and Biobank Services</h3>
                
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-40">
                      <div
                        className={`services-item__icon ${item.color_icon} mb-30`}
                      >
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title mb-30">
                          <Link href={item.link}>{item.title}</Link>
                        </h4>
                        <p>{item.des}</p>
                        <div className="services-item__btn">
                          <Link
                            className={`btn-hexa ${item.color}`}
                            href={item.link}
                          >
                            <i></i>Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
