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
          <div className="row">
            <div className="col-12">
                <p className="my-1">
                  These services are available on demand, allowing customers to use the specific proteomic techniques they need for their research projects. Thanks to our efficient ordering process, researchers can easily request and obtain the proteomic services they need from our biobank archive.
                </p>
                <p className="my-1">
                  Offering a wide range of proteomics services, our biobank repository aims to support researchers in their efforts to understand protein function, discover biomarkers and advance knowledge in the field of proteomics.
                </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProteomicsDetailsArea;
