import Link from "next/link";
import React from "react";
import ServicesPageData from '@/data/histopathology-page-data';

const ProteomicsDetailsArea = () => {

  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                  Proteomics
                </h4>
                <p className="mb-20">
                  Our proteomic biobank repository offers a diverse range of services across categories, providing researchers with valuable resources for their proteomic research. Here are the different categories we specialize in
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
                <h3 className="tp-section__title mb-70">Proteomics</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {
              ServicesPageData.proteomics.map((items, index) => (
                <div className="col-xl-12 col-12" key={index}>
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
                These services are available on demand, allowing customers to use the specific proteomic techniques they need for their research projects. Thanks to our efficient ordering process, researchers can easily request and obtain the proteomic services they need from our biobank archive.
              </p>
              <p className="mt-50 mb-50">
                Offering a wide range of proteomics services, our biobank repository aims to support researchers in their efforts to understand protein function, discover biomarkers and advance knowledge in the field of proteomics.
              </p>
              </div>
              <div className="services-link tp-srv-link mb-50">
                <span>
                  Proteomic :
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

export default ProteomicsDetailsArea;
