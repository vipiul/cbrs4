// external
import Link from "next/link";
import { useState } from "react";
// internal
import VideoPopup from "@/modals/video-popup";

// content
const content = {
  // sub_title: "Welcome to CBRS",
  // title: (
  //   <>
  //     Charting the Course of Medical Advancement: The Biobank of Possibilities<br />
  //   </>
  // ),
  des: (
    <>
      CBRS functions as a Countrywide biobank with access to a wide spectrum of human biospecimens across various disease conditions, catering to the research requirements of scientists CBRS is a CRO with
      cutting-edge technologies. Our biobank houses more than 500,000 human tissues, including both formalin-fixed paraffin-embedded (FFPE) and cryogenically preserved samples. Additionally, we possess
      tissue arrays, serum, plasma, whole blood, DNA, RNA samples, Digital Pathology and tissue microarrays (TMA). We embark on a journey of scientific exploration, driven by the invaluable treasure trove of
      biospecimens in our biobank. With unwavering commitment, we collect, preserve, and distribute a diverse array of human tissues, biofluids, and genetic materials, fostering groundbreaking research
      and innovative advancements. As a beacon of collaboration and ethical stewardship, we stand at the forefront of medical discovery, empowering researchers and scientists to unlock new horizons in the
      realm of health and biotechnology.
    </>
  ),
  btn_text1: "Contact Us",
  btn_text2: "About us",
};
const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box
const hero_box = [
  {
    id: 1,
    icon: "flaticon-rating",
    des: "100% Customer Satisfaction",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-target",
    des: "Help and Acess is Our Mission",
    color: "pink-icon",
    border: "pink-border",
  },
  {
    id: 3,
    icon: "flaticon-premium-badge",
    des: "100% Quality Laboratory service",
    color: "green-icon",
    border: "green-border",
  },
];

const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="banner-area p-relative pt-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner__content bannerContent pt-100 mb-135">
                <span className="banner__sub-title mb-20">{sub_title}</span>
                <h2 className="banner__title mb-30">{title}</h2>
                <p>{des}</p>
                <div className="banner__btn">
                  <Link className="tp-btn" href="/contact">
                    {btn_text1}
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about">
                    {btn_text2}
                  </Link>
                </div>
              </div>
              {/* <div className="banner__box-item">
                <div className="row">
                  {hero_box.map((item) => (
                    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                      <div
                        className={`banner__item d-flex ${item.border} align-items-center mb-30 wow fadeInUp`}
                        data-wow-delay=".2s"
                      >
                        <div className={`banner__item-icon ${item.color}`}>
                          <i className={item.icon}></i>
                        </div>
                        <div className="banner__item-content">
                          <span>{item.des}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="bannerscroll d-none d-xl-block">
          <div className="banner-scroll-btn">
            <a className="bannerscroll-icon" href="#tp-about-scroll">
              <i className="fa-light fa-computer-mouse"></i>
              <span>Scrool Down</span>
            </a>
          </div>
        </div>
        <div className="banner__shape12 d-none d-lg-block">
          <img src="/assets/img/banner/banner-03.png" alt="banner-img" />
          <div className="banner__video-btn">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="banner__video-icon popup-video"
            >
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"uZ9B_HB9u2s"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroBanner;
