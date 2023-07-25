import Link from "next/link";
import React from "react";
import ServicesPageData from '@/data/histopathology-page-data';

const GenomicsDetailsArea = () => {

  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                  Genomics
                </h4>
                <p className="mb-20">
                  Our genomics biobank repository  offers a wide range of services across categories, providing convenient access to high-quality genetic materials for researchers in industries such as pharmaceutical, biotechnology and pharmaceutical research laboratories. Our archive supports these industries as follows. 
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
                <h3 className="tp-section__title mb-70">Genomics</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {
              ServicesPageData.genomics.map((items, index) => (
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
                By providing easily accessible and well-preserved genetic materials to the pharmaceutical industry, biotechnology and drug research laboratories, our biobank repository facilitates discoveries, accelerates drug development and supports the development of precision medicine. Researchers can confidently access our data repositories and gain access to the critical resources needed for their innovative genomics research projects.
              </p>
              </div>
              <div className="services-link tp-srv-link mb-50">
                <span>
                  Genomics services :
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

export default GenomicsDetailsArea;
