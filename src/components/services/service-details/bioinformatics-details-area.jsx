import Link from "next/link";
import React from "react";
import ServicesPageData from '@/data/histopathology-page-data';

const BioinformaticsDetailsArea = () => {

  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                  Bioinformatics
                </h4>
                <p className="mb-20">
                  CBRS offers a wide range of bioinformatics services that help extract meaningful insights from complex biological data. Our bioinformatics expertise complements our biospecimen resources and allows us to provide complete solutions for research and clinical applications. Here are the main services we offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services-area pt-120 pb-90 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">
                  CBRS
                </span>
                <h3 className="tp-section__title mb-70">Bioinformatics</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {
              ServicesPageData.bioinformatics.map((items, index) => (
                <div className="col-xl-12 col-md-12" key={index}>
                  <div className="services-item__content">
                    <h4 className="services-item__tp-title tp-srv-title mb-30">
                      {items.ServicesTitle}
                    </h4>
                    <p>{items.ServicesDescription}</p>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>

      <section className="button-Link">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div>
              <p className="mt-50 mb-50">
                Using our bioinformatics services, scientists can extract valuable information from their data, discover hidden patterns and generate hypotheses for further research. Our expertise in computational analysis and data interpretation increases the value of biospecimen resources and enables researchers to accelerate discoveries and develop precision medicine applications.
              </p>
              </div>
              <div className="services-link tp-srv-link mb-50">
                <span>
                  Bioinformatic :
                  <Link href="/contact">
                    OUr Project<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BioinformaticsDetailsArea;
