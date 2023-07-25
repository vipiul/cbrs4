import Count from "@/common/count";
import Link from "next/link";
import React from "react";


// content
const content = {
  left_img: "assets/img/about/about-bg-01.png",
  experience_count: 12,
  experience_count_text: (
    <>
      Years of <br />
      Experience
    </>
  ),
  title: "About Us",
  section_title: "Clinical Bio-Samples and Research Services (CBRS)",
  section_sub_title:
    "Clinical Bio-samples and Research Services (CBRS) is situated in Noida, India.",
  section_des: (
    <>
      The first standalone biobank in India, CBRS Biobank was established in 2019 and has made important contributions to the advancement of science and medicine. One of the biggest biobanks in the nation, we work independently to gather, preserve, and provide high-quality biospecimens and related data to support a variety of research initiatives.
    </>
  ),
  about_info_list: [
    {
      text: "Extramural Funding",
    },
    {
      text: "Bacteria Markers",
    },
    {
      text: "Nam nec mi euismod euismod",
    },
    {
      text: "In aliquet dui nec lectus",
    },
  ],
};

const {
  left_img,
  experience_count,
  experience_count_text,
  title,
  section_title,
  section_sub_title,
  section_des,
  about_info_list,
} = content;

const About = () => {
  return (
    <>
      <section id="tp-about-scroll" className="about-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  <img src={left_img} alt="about-bg-img" />
                  <div className="about__exprience">
                    <h3 className="counter">
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i>{experience_count_text}</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-about__content pt-125 ml-60 mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="tp-section">
                  <span className="tp-section__sub-title left-line mb-25">
                    {title}
                  </span>
                  <h3 className="tp-section__title tp-ab-sm-title mb-45">
                    {section_title}
                  </h3>
                  <i>{section_sub_title}</i>
                  <p className=" mr-20 mb-45">{section_des}</p>
                </div>
                <div className="tp-about__info-list mb-55">
                  {/* <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul> */}
                </div>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/about">
                                      About us
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
