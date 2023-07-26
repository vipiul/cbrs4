import React from "react";


// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    // img: "/assets/img/shape/navtabs-01.png",
    title: "Generate Proposal",
    des: (
      <>
        Testing Begins many varios <br /> suffered alten in some
      </>
    ),
  },
  
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        Our vision is offering superior biospecimen resources, our biobank aspires 
        <br /> to be at the cutting edge of scientific development and revolutionize healthcare. 
      </>
    ),
    title: "Our vision is offering superior biospecimen resources,",  
    des_1: (
      <>
        Our vision is offering superior biospecimen resources, our biobank aspires to be at the cutting edge of scientific development and revolutionize healthcare. We picture a time when a vast collection of high-quality specimens is easily accessible to researchers and medical professionals, facilitating ground-breaking research, individualized care, and better patient outcomes. Our biobank wants to play a key role in determining the course of medicine and having a beneficial influence on world health by encouraging collaboration, embracing technological breakthroughs, and following the highest ethical standards.
      </>
    ),
    des_2: (
      <>
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      // { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
          To systematically gather, handle, and store high-quality
           <br /> 
           biospecimens and related data using
      </>
    ),
    title: "Promote collaboration and hasten scientific advancements.",
    des_1: (
      <>
        1.	<b>Collection and Preservation</b>: To systematically gather, handle, and store high-quality biospecimens and related data using established procedures in order to assure their long-term integrity and preservation.
        <br /><br />
        2.	<b>Ethical and Regulatory Compliance</b>: To adhere rigorously to ethical standards and legal obligations to safeguard donors&apos; rights, privacy, and confidentiality as well as to guarantee informed consent and good governance in all operations.
        <br /><br />
        3.	<b>Accessibility</b>: Promote collaboration and hasten scientific advancements by making biospecimens and related data easily available to authorized researchers.
        <br /> <br />
        4.	<b>Diversity and Representation</b>: To guarantee that various groups are represented in the biobank in order to alleviate health inequalities, advance equitable representation, and improve the generalizability of research findings.
      </>
    ),
    des_2: (
      <>
        5.	<b>Quality Assurance</b>: To create strong quality control procedures, such as thorough sample characterization, validation, and documentation, in order to guarantee the consistency and dependability of biospecimens and the data they are connected with.
        <br /> <br />
        6.	<b>Collaboration and Partnerships</b>: Actively collaborate with academic institutions, industry stakeholders, and other organizations to expand research opportunities, exchange best practices, and draw on a pool of collective knowledge.
        <br /> <br />
        7.	<b>Innovation and Technological Advancement</b>: To continuously investigate and use cutting-edge technologies, such as genomics, proteomics, and digital pathology, to increase the value and usability of the resources available from the biobank for cutting-edge research.
        <br /> <br />
        8.	<b>Education and Outreach</b>: To take part in educational projects, neighborhood outreach programs, and public awareness campaigns to encourage awareness of biobanking, research participation, and the possible effects on healthcare outcomes.
        <br /> <br />
        9.	<b>Long-Term Sustainability</b>: To create a viable business model, obtain sufficient funding, and create long-term financial viability plans that will ensure the biobank&apos;s continuous existence and expansion.
        <br /> <br />
        10.	<b>Influence on Healthcare</b>: To work toward having a real influence on healthcare by making it easier for research findings to be applied in clinical settings, guiding therapy selection, and advancing the field of customized medicine.
      </>
    ),
    images: [
      // { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Our Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Vision
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Goals
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-3 col-md-5">
                    <div className="navtabs nav-primary p-relative text-center">
                      <div className="navtabs__icon ">
                        <i className={item.icon}></i>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="col-xl-9 col-lg-9 col-md-7">
                    <p>
                    Our biobank&apos;s Mission is to advance medical research and enhance patient care through the efficient collection, storage, and provision of high-quality bio specimens and related data. We strive to encourage collaboration and advance cutting-edge diagnostics, therapies, and personalized medicine methods through our dedication to moral behavior and exacting quality standards. Our ultimate objective is to make a positive impact on disease awareness, prevention, and treatment so that patients and society as a whole can ultimately benefit.
                    </p>
                </div>
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        {/* <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4> */}
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {/* {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
