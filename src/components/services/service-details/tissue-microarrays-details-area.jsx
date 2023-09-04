import Link from "next/link";
import React from "react";

const TissueMicroarrayDetailsArea = () => {
  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <p className="mb-20">
                  The term tissue microarray refers to the innovative practice of relocating multiple tissue sections from conventional histological kerosene blocks so that the tissues of multiple specimens can be viewed on the same slide. Tissue microarrays (TMAs) contain biomolecules such as proteins, carbohydrates, lipids, RNA, or DNA in their preserved state, providing a high-throughput platform for rapid analysis of molecular markers associated with the diagnosis/prognosis of disease or physiological states.
                </p>
                <div className="tma-image-banner-sd mb-30">
                  <img src="assets/img/services/tma.png" alt="tma" />
                </div>
                <p>TMAs provide a convenient and effective tool for modern molecular pathology with several advantages that include: experimental uniformity, reduction in assay volume/number of slides/workload, freshly cut slides, positive control options, compatibility with automated staining systems, and shelf life of up to one year when stored at 4 °C. TMAs can be used for various applications such as immunohistochemistry kerosene (IHC-P), in situ hybridization (ISH or FISH when using fluorochrome labelled probes), mRNA or miRNA ISH, TUNEL assay, histochemical staining and nucleic acid extraction. Novus Biologicals offers TMAs for normal human, rat, mouse, and primate/monkey tissues, and human TMAs are also available for various cancers, including malignant or metastatic cancers and cancer/normal adjacent tissue. For complete tissue details, H&E-stained images, citations in publications, product reviews, and related products, please refer to the individual online datasheets for the listed products.</p>
                <div className="tma-image-banner-sd">
                  <img src="assets/img/services/tma02.png" alt="tma" />
                </div>
                <p>CBRS has expertise in the design & manufacture of custom human tissue microarrays (TMA) for analysis of target and biomarker expression in diseased, adjacent normal and normal tissues. Our team can help you select an appropriate human biospecimen from the list of available tissues or procure a unique human TMA tissue set for your project, fabricate the TMA, and implement various standard and custom IHC and FISH protocols. We can also provide access to high-quality human biospecimens with clinical outcome data.</p>
              </div>
            </div>
          </div>
          <div className="list-of-data mt-50-cs">
            <div className="inner-data-lsit">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h6>Cancer TMA</h6>
                  <ul className="lsitof-data">
                    <li>• Breast</li>
                    <li>• Colon and Rectum</li>
                    <li>• Lung</li>
                    <li>• Stomach</li>
                    <li>• Head and Neck</li>
                    <li>• Kidney</li>
                    <li>• Thyroid</li>
                    <li>• Melanoma</li>
                    <li>• Ovary</li>
                    <li>• Prostate</li>
                    <li>• Lymphoma</li>
                    <li>• Bladder</li>
                    <li>• Brain</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <h6>Custom TMA features</h6>
                  <ul className="lsitof-data">
                    <li>• Client - and study-specific human tumor tissue selection</li>
                    <li>• Inclusion of all desired and appropriate controls</li>
                    <li>• Extensive clinical history information, including clinical outcome data</li>
                    <li>• Custom preparation of frozen tissue TMA (OCT human tissues)</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <h6>General TMA Specifications</h6>
                  <ul className="lsitof-data">
                    <li>• FFPE human tissues</li>
                    <li>• Tissue cores 1 - 2 mm</li>
                    <li>• Multiple cores per case</li>
                    <li>• TMA map</li>
                    <li>• TMA tissue slides</li>
                    <li>• H&E slides/images</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TissueMicroarrayDetailsArea;
