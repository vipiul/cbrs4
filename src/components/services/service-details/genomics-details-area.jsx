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
                  Our genomics biobank repository  offers a wide range of services across categories, providing convenient access to high-quality genetic materials for researchers in industries such as pharmaceutical, biotechnology and research laboratories. Our archive supports these industries as follows. 
                </p>
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
          <div className="row">
            <div className="col-12">
              <p className="my-1">
                By providing easily accessible and well-preserved genetic materials to the pharmaceutical industry, biotechnology and drug research laboratories, our biobank repository facilitates discoveries, accelerates drug development and supports the development of precision medicine. Researchers can confidently access our data repositories and gain access to the critical resources needed for their innovative genomics research projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenomicsDetailsArea;
