import Link from "next/link";
import React from "react";
import ServicesPageData from '@/data/histopathology-page-data';

const LaboratoryAndBiobankDetailsArea = () => {

  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                  Histopathology
                </h4>
                <p className="mb-20">
                  Our biobank&apos;s histopathology services offer a comprehensive range of support to researchers, ensuring they have access to essential techniques and expertise in their studies. Here&apos;s how our histopathology services can assist researchers
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
                <h3 className="tp-section__title mb-70">Histopathology</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {
              ServicesPageData.histopathology.map((items, index) => (
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
                By leveraging our comprehensive histopathology services, researchers gain valuable insights into tissue structures, cellular components, and molecular markers. These services play a crucial role in advancing research across various fields, including cancer biology, disease pathology, and therapeutic development. With our expertise and state-of-the-art technologies, we aim to empower researchers to unravel the complexities of diseases and drive meaningful scientific discoveries.
              </p>
              </div>
              <div className="services-link tp-srv-link mb-50">
                <span>
                  Histopathology :
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

export default LaboratoryAndBiobankDetailsArea;
