import {useState, useEffect} from "react";
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
    }).then(({data : {research}}) => {
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
