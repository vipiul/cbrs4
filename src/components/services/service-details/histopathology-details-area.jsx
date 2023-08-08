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

            <div className="col-12">
              <div className="imagecontent mb-30">
                <img src="/assets/img/banner/histopathology-04.jpg" alt="histopathology-02" style={{width: '100%'}} />
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-12">
              <p className="">
                By leveraging our comprehensive histopathology services, researchers gain valuable insights into tissue structures, cellular components, and molecular markers. These services play a crucial role in advancing research across various fields, including cancer biology, disease pathology, and therapeutic development. With our expertise and state-of-the-art technologies, we aim to empower researchers to unravel the complexities of diseases and drive meaningful scientific discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaboratoryAndBiobankDetailsArea;
