import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="image-about">
                <img src="assets/img/about/about-bg-03.png" style={{borderRadius: 10}} width={'100%'} alt="about-us" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <p>
                  Clinical Biosamples and Research Services (CBRS) LLP is a CRO, based in Noida, India. The first standalone biobank in India, CBRS Biobank was established in 2019 and has made important contributions to the advancement of science and medical science since then. We are one of the biggest biobanks in the nation, and we work independently to gather, preserve, and provide high-quality biospecimens and related data to support a variety of research initiatives. The acquisition of all the biospecimens is revolutionized by our exclusive procurement team, which not only speeds up the sample gathering process but also makes sure all the ethical procedures are strictly followed during the entire process. By rethinking the conventional method, we make it possible for researchers to access the billions of specimens that are readily available, streamlining and advancing the search for scientific discoveries.
                  </p>
                  <p>
                  The CBRS Biobank, which houses extensive biosample data gathered from around the nation, is a comprehensive biomedical database and an excellent research resource. This worldwide accessible database, which is continuously updated, is an essential tool for authorized researchers looking into common and deadly diseases. The CBRS Biobank has significantly contributed to medicinal studies previously and actively participating in several research works presently too. We are pleased to have contributed to numerous important research articles published worldwide.
                  </p>
                </div>
                {/* <div className="about-content__btn">
                  <Link href="/about" className="tp-btn">
                    About us
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          <div className="row mt-50">
            <div className="content">
            <h4 className="tp-srv-stap__title mt-25">How we assist the Research Community</h4>
                <p>CBRS Biobanks play a vital role in supporting the research community by providing essential biosample storage services. These services are crucial in preserving human biospecimens that serve as the cornerstone for future research endeavors. By securely storing these biospecimens, CBRS enable researchers to delve into critical areas such as drug delivery, cell activity, and disease pattern identification. This valuable resource aids in advancing scientific understanding, promoting medical breakthroughs, and improving overall healthcare outcomes.</p>
                <p>Biorepositories and biobanks serve distinct purposes in the research community, with variations in their service offerings and sample types. While a biorepository primarily functions as a storage facility for a wide range of sample types, a biobank specializes in specific sample types and often focuses on a particular demographic, making their collections valuable resources for the broader research community, such as cancer research.</p>
                <p>The types of samples stored can vary significantly between institutions, although there may be some overlap in the biospecimens or kits offered by each. Researchers in the community particularly appreciate the availability of categorized biobanks and biorepositories, as they provide access to well-organized and curated collections that align with their specific research needs.</p>
                <p><b>Therefore in CBRS : </b> we take special efforts to keep our samples well-organized and readily available for any research need, anytime.</p>
                
                <h4 className="tp-srv-stap__title mt-25">Our Global distribution of Biosamples</h4>
                <p>Our biobank takes immense pride in its global distribution network, which enables the widespread availability of biosamples to researchers and scientists worldwide. We have strategically established partnerships and collaborations with institutions, organizations, and research facilities across various countries, ensuring that our biosamples can reach researchers wherever they are located.</p>
                <p>Our global distribution capabilities are supported by robust logistics systems, which include specialized packaging and temperature-controlled environments to preserve the stability and viability of the biosamples during transit. We work closely with reputable shipping partners who have extensive experience in handling biological materials, ensuring that the samples are delivered in a timely and reliable manner.</p>
                <p>Overall, our extensive global distribution network enables us to efficiently and effectively deliver biosamples to researchers worldwide, fostering collaborations and accelerating scientific advancements on a global scale.</p>
                <h4 className="tp-srv-stap__title mt-25">Disaster Recovery</h4>
                <p>At CBRS, we prioritize the safety and security of our laboratory and the precious biosamples stored within. To mitigate the risks of unforeseen events such as blackouts, equipment failures, and temperature fluctuations, we have implemented modern laboratory technology and robust alarm systems.</p>

                <ul className="ml-30 mb-40">
                  <li><p>-	Our laboratory storage and alarm systems are equipped with state-of-the-art technology, ensuring the protection and integrity of the biosamples. In the event of equipment malfunctions or deviations, our central alarm systems continuously monitor all incubators, freezers, and refrigerators 24/7.</p></li>
                  <li><p>-	To ensure uninterrupted operations, our critical equipment and mechanical systems are backed up by emergency power systems.</p></li>
                  <li><p>-	A separate unit dedicated to backup facilities, to store cryopreserved specimens equipped with multi-tiered alarm systems that monitor various factors, including ambient oxygen levels and door entry activity. This comprehensive approach ensures the safety and integrity of the stored specimens.</p></li>
                </ul>
                <h4 className="tp-srv-stap__title mt-25">Ethical committee</h4>
                <p>CBRS, as a responsible and reputable organization, places great emphasis on adhering to ethical and legal guidelines. To ensure compliance, we have established our own Independent Ethics Committee and have obtained certifications from various recognized authorities.</p>
                <p>CBRS is proud to be MSME certified and registered under the Department of Health and Research (DHR) of the Ministry of Health and Family Welfare, Government of India. Additionally, we are also registered with The Indian Council of Medical Research (ICMR), another prestigious regulatory body in India. These certifications and registrations serve as a testament to our commitment to following all necessary legal and ethical procedures.</p>
                <p>In handling human biological samples, CBRS strictly adheres to two major guidelines. Firstly, we adhere to the guidelines set forth by the Health Insurance Portability and Accountability Act (HIPAA). This ensures the protection of individual health information and promotes the privacy and security of patient data.</p>
                <p>Secondly, we rigorously follow the guidelines established by The Indian Council of Medical Research (ICMR). These guidelines outline the best practices for the handling, storage, and utilization of human biological samples, ensuring the utmost ethical considerations are taken into account.</p>
                <p>By strictly adhering to these guidelines and regulations, CBRS guarantees that all legal and ethical procedures are diligently followed. Our commitment to compliance underscores our dedication to maintaining the highest standards of integrity and ensuring the protection and confidentiality of all patient-related information and biological samples entrusted to us.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
