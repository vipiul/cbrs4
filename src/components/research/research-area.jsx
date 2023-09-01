import { useState, useEffect } from "react";
import research_data from "@/data/research-data";
import Link from "next/link";
import axios from "axios";

const ResearchArea = () => {

  // i am calling api show list data on the feedback page
  const [research, setResearch] = useState([])

  const fetchFeedback = async () => {
    const token01 = localStorage.getItem('CONTENT');

    axios({
      method: "get",
      url: "https://sndigitech.in/cbrs/api/researchs",
      headers: {
        'Authorization': `Bearer ${token01}`,
      }
    }).then(({ data: { research } }) => {
      setResearch(research);
    }).catch((response) => {
      console.log(response);
    })
  }

  useEffect(() => {
    fetchFeedback()
  }, []);

  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="recharge-pepar">
              <h4 className="tp-srv-stap__title mb-25">Research Papers</h4>
              <p>
                Dive into a wealth of knowledge at our forward-looking biobank, where an extensive collection of research papers on a myriad of ongoing topics, including cancer, awaits your exploration. Our repository of research papers serves as a beacon for researchers, clinicians, and scholars seeking insights, breakthroughs, and the latest advancements in the dynamic field of oncology.
              </p>

              <p>
                Our biobank is a hub for comprehensive research materials, housing an impressive array of scholarly articles, peer-reviewed studies, and academic publications. From the molecular intricacies of cancer to innovative treatment modalities, our collection covers the entire spectrum of cancer research. Whether you're delving into genetics, immunotherapy, precision medicine, or any other facet of oncology, you'll find a treasure trove of invaluable resources at your fingertips.
              </p>

              <p className="mb-50">
                What sets our biobank apart is not just its wealth of research papers but also its team of expert professionals dedicated to guiding and assisting researchers on their quest for knowledge. Our team comprises seasoned researchers, clinicians, and subject matter experts with a deep understanding of cancer research. They are ready to offer insights, answer queries, and provide guidance as you navigate the complexities of your research endeavors.
              </p>

              <p className="mb-50">
                Experience the synergy of cutting-edge research papers and personalized expert assistance as you embark on your cancer research journey. Our biobank empowers you with the resources and support you need to make meaningful contributions to the field, advancing our understanding of cancer and paving the way for transformative breakthroughs.
              </p>
            </div>
          </div>
          <div className="row">
            {research.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`research-item mb-50 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src="/assets/img/blog/research-image-01.png" alt="research-thumb" />
                  </div>
                  <div className="research-item__content">
                    <h4 className="research-item  __title mb-20">
                      <Link href="/#" >{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>
                    <Link href={item.thumbnail} className="research-item__btn" target="_black" download>
                      Download here !
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchArea;
