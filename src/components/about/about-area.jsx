import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="image-about">
                <img src="assets/img/about/about-bg-03.png" style={{borderRadius: 10}} width={'100%'} alt="about-us" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <p>
                  Clinical Biosamples and Research Services (CBRS) LLP is a CRO, based in Noida, India. The first standalone biobank in India, CBRS Biobank was established in 2019 and has made important contributions to the advancement of science and medical science since then. We are one of the biggest biobanks in the nation, and we work independently to gather, preserve, and provide high-quality biospecimens and related data to support a variety of research initiatives. The acquisition of all the biospecimens is revolutionized by our exclusive procurement team, which not only speeds up the sample gathering process but also makes sure all the ethical procedures are strictly followed during the entire process. By rethinking the conventional method, we make it possible for researchers to access the billions of specimens that are readily available, streamlining and advancing the search for scientific discoveries.
                  </p>
                  <p>
                  The CBRS Biobank, which houses extensive biosample data gathered from around the nation, is a comprehensive biomedical database and an excellent research resource. This worldwide accessible database, which is continuously updated, is an essential tool for authorized researchers looking into common and deadly diseases. The CBRS Biobank has significantly contributed to medicinal studies previously and actively participating in several research works presently too. We are pleased to have contributed to numerous important research articles published worldwide.
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
