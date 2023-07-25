import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    About Us.
                  </h3>
                  <p>
                    <b>About ISBER To Get Know About Us </b>
                    – ISBER is the only global forum the addresses scientific, technical, legal, and ethical issues for biobanks and biorepositories.
                  </p>
                  <p className=" mr-20 mb-40">
                  The only global forum that considers the scientific, technical, legal, and ethical concerns for biobanks and biorepositories is ISBER.
                  </p>
                  <p className=" mr-20 mb-40">
                  ISBER promotes cooperation, develops educational and training opportunities, offers a venue for the communication of cutting-edge procedures, procedures, and research findings, and acts as a global marketplace for cutting-edge goods, services, and technology. Together, these initiatives support best practices that apply to the wide range of repositories that ISBER supports.  
                  </p>
                  <p>
                    <b>ISBER serves four distinct regions. Each region has an elected board representative and regional ambassadors.</b>
                  </p>
                  <div className="tp-about__info-list mb-55">
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i>
                          Americas
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                          Europe Middle East And Africa
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                          Indo Pacific
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                          China
                      </li>
                    </ul>
                  </div>



                  <p>
                  Contract research organization (CRO) Clinical Bio samples and Research Services (CBRS) is situated in Noida, India. The first standalone biobank in India, CBRS Biobank was established in 2019 and has made important contributions to the advancement of science and medicine. One of the biggest biobanks in the nation, we work independently to gather, preserve, and provide high-quality biospecimens and related data to support a variety of research initiatives. The acquisition of biospecimens is revolutionized by our ground-breaking CBRS, which also speeds up medical advancements. By rethinking the conventional method, we make it possible for researchers to access the billions of specimens that are readily available, streamlining and advancing the search for scientific discoveries.
                  </p>
                  <p>
                  The CBRS Biobank, which houses extensive genetic and health data gathered from around the nation, is a comprehensive biomedical database and an excellent research resource. This worldwide accessible database, which is always being updated with new data, is an essential tool for authorized researchers looking into common and deadly diseases. The CBRS Biobank has significantly advanced modern medicine and treatment and enabled a number of scientific discoveries that improve human health and wellbeing. We are pleased to have contributed to numerous important research articles published worldwide. In the &apos;Research Papers&apos; section, a few research articles are also shared.
                  </p>
                </div>
                {/* <div className="about-content__btn">
                  <Link href="/about" className="tp-btn">
                    About us
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
