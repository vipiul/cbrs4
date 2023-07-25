import research_data from "@/data/research-data";
import Link from "next/link";
import React from "react";

const ResearchArea = () => {
  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="recharge-pepar">
              <h4 className="tp-srv-stap__title mb-25">Research Papers</h4>

              <p>
                Promoting breakthroughs to improve human well-being, CBRS is an international pioneer, providing a wealth of information to researchers worldwide. This invaluable resource allows scientists from many countries to learn about the origins, prevention, and treatment of diseases.
              </p>

              <p>
                This massive data sheds light on both standard and life-threatening diseases, from cancer and diabetes to depression and arthritis. With the valuable support of researchers worldwide, the CBRS collaboration has led to the discovery of new approaches to improve health outcomes,  evidenced by a significant number of scientific articles. In addition, we act as a catalyst for international and interdisciplinary cooperation. By providing a unique platform for scientists, researchers and geneticists, we foster innovative collaboration to revolutionize public health.
              </p>

              <p className="mb-50">
                Together, we create imaginative and disruptive ways to advance the well-being of communities around the world. After the studies are completed, researchers disseminate their findings by publishing them in scientific journals, allowing researchers and medical professionals to benefit from the information obtained. We encourage researchers to use open access when publishing their results. This ensures that participants and the public receive relevant knowledge to improve health outcomes. Explore our extensive collection of published articles by clicking the link below.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="download-pdf col-12 col-md-4 col-lg-4" style={{display: 'none'}}>
              <div className="inner-pdf-ds">
                <div className="file-title">
                  <h3>File Download / Pdf Preview</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="file-download">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <p className="my-3">Download file here !</p>
                  {/* <a href="assets/pdf/fake.pdf" className="download-link" download>Download Here !</a> */}
                  <Link href="assets/pdf/fake.pdf" download className="research-item__btn">
                    Download Here
                    </Link>
                </div>
              </div>
            </div>

            {research_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`research-item ${item.color} mb-50 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src={item.img} alt="research-thumb" />
                  </div>
                  <div className="research-item__content">
                    <h4 className="research-item  __title mb-20">
                      <Link href="/#">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <Link href="assets/pdf/fake.pdf" className="research-item__btn" download>
                      Download here ! 
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
                <nav>
                  <ul>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-left-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/research">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/research">3</Link>
                    </li>
                    <li>
                      <Link href="/research">...</Link>
                    </li>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchArea;
