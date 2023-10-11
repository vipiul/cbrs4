import blog_data from "@/data/blog-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from "axios";


// slider setting 
const setting = {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tp-blog-n",
    prevEl: ".tp-blog-p",
  },
};
const Blog = () => {

  // i am calling api show list data on the feedback page
const [blogdata, setBlogdata] = useState([])

const fetchFeedback = async () => {
    const token01 = localStorage.getItem('CONTENT');

    axios({
        method: "get",
        url: "http://103.25.130.106:3000/api/researchs",
        headers: {
            'Authorization': `Bearer ${ token01 ? token01 : ''}`,
        }
    }).then(({data : {research}}) => {
      setBlogdata(research);
    }).catch((response) => {
        console.log(response);
    })
}

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
    fetchFeedback()
  }, []);

  return (
    <>
      <section className="blog-area pt-125 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Waht&apos;s New
                </span>
                <h3 className="tp-section__title mb-65">Research Paper</h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-arrow d-flex align-items-center">
                <div className="tp-blog-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-blog-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            {...setting}
            loop={isLoop}
            modules={[Navigation]}
            className="swiper-container tp-blog-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            {blogdata.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <a href="#">
                        <img src="/assets/img/blog/research-image-01.png" alt="blog-item" />
                      </a>
                      {/* <div className="tp-blog__date text-center">
                        <h4>{item.blog_date}</h4>
                      </div> */}
                    </div>
                    <div className="tp-blog__content">
                      {/* <span className="tp-blog__category mb-30">
                        <Link href="#">{item.blog_category}</Link>
                      </span> */}
                      <h5 className="tp-blog__title mb-20">
                        <Link href="#">{item.title}</Link>
                      </h5>
                      <p>{item.description}</p>
                      <div className="tp-blog__btn">
                        <Link href={item.thumbnail} target="_black" download>Download Here !</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
