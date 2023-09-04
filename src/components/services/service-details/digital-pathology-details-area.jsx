import Link from "next/link";
import React from "react";

const DigitalPathologyDetailsArea = () => {
  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="services-thumb-img mb-50 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/services/services-thumb-07.jpg"
                  alt="services-thumb"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="services-thumb-img mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/services/services-thumb-08.jpg"
                  alt="services-thumb"
                />
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                  Digital Pathology
                </h4>

                <p className="mb-20">
                  The imaging study carried out by the CBRS Biobank represents an unprecedented attempt to take detailed images of the internal structures of the body. This ambitious project will involve scanning the brains, hearts, bones, and stomachs of 100,000 participants across the country, and significant progress has already been made. Valuable information from this study will contribute to the development of analytical methods aimed at improving the early detection of many life-threatening disorders, enabling diagnosis even before symptoms appear. This ground-breaking initiative holds enormous promise for advancing innovation and improving health outcomes.  In recent years, the introduction of digital pathology has revolutionized the field of medical research, offering new opportunities and advances. This state-of-the-art technology enables the digitization and analysis of pathology slides, enabling greater collaboration, efficiency, and accuracy in medical research. At CBRS, we have been at the forefront of this digital pathology revolution and have continuously developed our services to optimize research outcomes. With our innovative digital pathology solutions, we have harnessed the power of digital imaging, advanced algorithms, and data analysis to advance medical research. With digital pathology, researchers can now access a wide range of digitized pathology slides, overcoming geographic barriers and facilitating large-scale collaboration. Our services allow researchers to remotely analyze and annotate slides, seamlessly share data, and use automated image analysis methods to accelerate research data. In addition, our digital pathology platform offers robust tools for data management, integration and visualization.
                </p>

                <p className="mb-20">
                  Researchers can efficiently organize and analyze vast amounts of pathological data, enabling the identification of new biomarkers, the evaluation of treatment responses, and the discovery of potential therapeutic targets. Our custom digital pathology solutions aim to optimize the research process, improve reproducibility, and advance discoveries in the medical world. Combining the expertise of our team with cutting-edge technology, we are committed to supporting researchers in their efforts to improve patient outcomes, advance medical knowledge and shape the future of healthcare.
                </p>

                <p className="mb-20">
                  We offer high-quality scientific support to academic institutions and the biopharmaceutical research community, addressing their needs in standards histology, histopathology, biomarker R&D, HD tissue slides scanning, and digital image analysis for their translational science and precision medicine programmers. CBRS provides a comprehensive range of Digital Pathology Services across the country.
                </p>

                <ul className="this-digital-pathlo">
                  <li>• High-definition scanning with 3DHISTECH Panoramic MIDI II slide scanner</li>
                  <li>• Brightfield or Fluorescence scanning (CBP or customer slides)</li>
                  <ul className="sub-heading-cs" style={{paddingLeft: '40px'}}>
                    <li>• Scan at 20X or 40X Objective</li>
                    <li>• Up to 4 fluorescence channels</li>
                    <li>• Whole slide or partial section capture</li>
                  </ul>
                  <li>• Unlimited number of downloads for 30 days after completion of a project (cloud
                    storage); extended storage for a small fee</li>
                  <li>• Image transfer to a customer’s physical external storage device</li>
                  <li>• Image file format conversion (.MRXS files to .TIFF and/or .SVS files)</li>
                  <li>• Tissue composition and biomarker expression analysis using standard industry
                    software</li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DigitalPathologyDetailsArea;
