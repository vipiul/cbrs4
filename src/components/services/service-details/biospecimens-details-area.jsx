import Link from "next/link";
import React from "react";

const BiospecimensDetailsArea = () => {
  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">

                <p className="mb-20">
                  Positioned as India &apos;s inaugural independent biobank establishment, the CBRS biobank stands devotedly committed to the acquisition, preservation, and dissemination of human biospecimens and their associated data, to assist propel the advancement of research undertakings. Our all-encompassing collection spans a diverse spectrum of samples, encompassing not only Whole blood, tissues, FFPE Blocks, DNA, and RNA, but also an assortment of various biofluids and more. Within the landscape of medical progress, the CBRS biobank emerges as a pivotal driving force, equipping researchers with avant-garde technologies to explore groundbreaking treatments, fathom the complexities of ailments, and lay the groundwork for bespoke medical interventions.
                </p>

                {/* table list 01 */}
                <div className="list-of-data mt-50-cs">
                  <div className="inner-data-lsit">
                    <div className="row">
                      <div className="col-12">
                        <h3 className="title-bio-sd">BIOSPECIMENS</h3>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="lsitof-data pl-30-cs">
                          <li>• Diseased</li>
                          <li>• Normal/Control</li>
                          <li>• FFPE Blocks</li>
                          <li>• Frozen Tissues</li>
                          <li>• Blood</li>
                          <li>• Plasma</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="lsitof-data">
                          <li>• Serum</li>
                          <li>• PBMC</li>
                          <li>• Organ sections</li>
                          <li>•  Oncology specimen</li>
                          <li>• Bone Marrow Aspirates</li>
                          <li>• Fecal, Urine</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* table list 02 */}
                <div className="list-of-data mt-50-cs">
                  <div className="inner-data-lsit">
                    <div className="row">
                      <div className="col-12">
                        <h3 className="title-bio-sd mb-30-cs">BANKED FFPE BLOCKS</h3>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>REPRODUCTIVE</h6>
                        <ul className="lsitof-data">
                          <li>• Breast Lobular Carcinoma</li>
                          <li>• Breast Invasive ductal</li>
                          <li>• carcinoma</li>
                          <li>• Ovarian Carcinoma</li>
                          <li>• Endometriod Adenocarcinoma</li>
                          <li>• Teratoma</li>
                          <li>• Seminoma</li>
                          <li>• Embryonal carcinoma</li>
                          <li>• Yolk sac tumor</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>GASTROINSTESTINAL</h6>
                        <ul className="lsitof-data">
                          <li>• Esophageal Carcinoma</li>
                          <li>• Gastric Adenocarinoma</li>
                          <li>• Colon Adenocarcinoma</li>
                          <li>• Rectal Adenocarcinoma</li>
                          <li>• Hepatocellular Carcinoma</li>
                          <li>• Pancreatic Adenocarcinoma</li>
                          <li>• Gallbladder Carcinoma</li>
                          <li>• Ampullary Carcinoma</li>
                          <li>• Coeliac Disease</li>
                          <li>• GIST</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>GENITOURINARY</h6>
                        <ul className="lsitof-data">
                          <li>• Prostate Carcinoma</li>
                          <li>• Renal Cell Carcinoma</li>
                          <li>• Urothelial Carcinoma</li>
                          <li>• GIST</li>
                          <li>• GIST</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>INTEGUMENTARY</h6>
                        <ul className="lsitof-data">
                          <li>• Basal Cell Carcinoma</li>
                          <li>• Malignant Melanoma</li>
                          <li>• Squamous Cell Carcinoma</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>CIRCULATORY</h6>
                        <ul className="lsitof-data">
                          <li>• Bone marrow aspirate</li>
                          <li>• Leukemia</li>
                        </ul>
                      </div> 
                      <div className="col-12 col-md-3">
                        <h6>RESPIRATORY</h6>
                        <ul className="lsitof-data">
                          <li>• NSCLC</li>
                          <li>• Neuroendocrine</li>
                          <li>• Carcinoma</li>
                          <li>• Small Cell Carcinoma</li>
                          <li>• Mesothelioma</li>
                        </ul>
                      </div> 
                      <div className="col-12 col-md-3">
                        <h6>MUSCULO SKELETAL</h6>
                        <ul className="lsitof-data">
                          <li>• Ewing &apos;s Sarcoma</li>
                          <li>• Angiofibroma</li>
                          <li>• Liposarcoma</li>
                          <li>• Rectal Adenocarcinoma</li>
                          <li>• Rhabdomtos Sarcoma</li>
                          <li>• Plasma Cell Tumour</li>
                          <li>• Other Soft Tissue Tumour</li>
                        </ul>
                      </div> 
                      <div className="col-12 col-md-3">
                        <h6>NERVOUS</h6>
                        <ul className="lsitof-data">
                          <li>• Glioblastoma</li>
                          <li>• Astrocytoma</li>
                          <li>• Meningioma</li>
                          <li>• Oligodendroglioma</li>
                          <li>• Pitutary Adenocarcinoma</li>
                          <li>• Schwannoma</li>
                          <li>• Primary CNS Lymphoma</li>
                        </ul>
                      </div> 
                      <div className="col-12 col-md-3">
                        <h6>LYMPHATIC</h6>
                        <ul className="lsitof-data">
                          <li>• Non-Hodgkin &apos;s Lymphoma</li>
                          <li>• Hodgkin &apos;s Lymphoma</li>
                          <li>• DLBCL</li>
                          <li>• Anaplastic Large Cell Lymphoma</li>
                          <li>• Follicular Lymphoma</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>ENDOCRINE / EXORINE</h6>
                        <ul className="lsitof-data">
                          <li>• Adenoid Cystic Carcinoma</li>
                          <li>• Mucoepidermoid</li>
                          <li>• Thyroid Papillar Carcinoma</li>
                          <li>• Thyroid Follicular Carcinoma</li>
                          <li>• Adrenocortical Carcinoma</li>
                          <li>• Neuroendocrine Tumours</li>
                          <li>• Pheochromocytoma</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-3">
                        <h6>METASTATIS</h6>
                        <ul className="lsitof-data">
                          <li>• Thyroid </li>
                          <li>• Pleural Omentum </li>
                          <li>• Spine </li>
                          <li>• Urinary Bladder </li>
                          <li>• Liver </li>
                          <li>• Ovary </li>
                          <li>• Neuroendocrine </li>
                          <li>• Neck  </li>
                          <li>• Bone  </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* table list 03 */}
                <div className="list-of-data mt-50-cs">
                  <div className="inner-data-lsit">
                    <div className="row">
                      <div className="col-12">
                        <h3 className="title-bio-sd mb-30-cs">PROSPECTIVE COLLECTIONS</h3>
                      </div>
                      <div className="col-12 col-md-3">
                        <ul className="lsitof-data">
                          <li>• BREAST</li>
                          <li>• COLON</li>
                          <li>• CERVIX</li>
                          <li>• GALLBLADDER</li>
                          <li>• LIVER</li>
                          <li>• OVARY</li>
                          <li>• HEAD AND NECK</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BiospecimensDetailsArea;
