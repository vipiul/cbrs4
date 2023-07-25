import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Explore",
      cls: "footer-col-2",
      links: [
        { name: "Connect to enquire", link: "/contact-us" },
        { name: "Search Biospecimens n Services", link: "/about" },
        { name: "Connect to order", link: "/" },
        { name: "Track your order", link: "/" },
      ],
    },
    {
      id: 2,
      title: "Collaborations n Suppliers",
      cls: "footer-col-3",
      links: [
        { name: "Collaborations", link: "/" },
        { name: "Suppliers", link: "/" },
        { name: "Connect to collaborate", link: "/service" },
        { name: "Be a team member", link: "/" },
        { name: "Connect to enquire", link: "/research" },

      ],
    },
    {
      id: 3,
      title: "Learn",
      cls: "footer-col-3",
      links: [
        { name: "About Us", link: "/contact-us" },
        { name: "Ethical committee", link: "/about" },
        { name: "Research Papers", link: "/service" },
        { name: "Careers", link: "/services-2" },
        { name: "Privacy Policies", link: "/research" },
        { name: "Contact no", link: "/research" },

      ],
    },
  ],
  contact_info: [
    {
      support_info: [
        " C-25, C Block, Sector 8, Noida, Uttar Pradesh 201301 ",
        "+91 83838 64051",
        " sales@clinicalbiosamples.com",
      ],
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> CBRS</Link>.<i> All Rights Reserved Copyright</i>
    </>
  ),
};

console.log(footer_content.contact_info[0].support_info)

const { footer_info, copy_right_text, contact_info } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/white-logo.png" alt="logo" />
                    </a>
                  </h4>
                  {
                      footer_content.contact_info[0].support_info.map((description, i) => (
                        <div key={'description' + i}>
                          <p className="mb-0">{description}</p>
                        </div>
                      ))
                    }
                  
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {
                footer_info.map(item => <div key={'footer-list'+item.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">{item.title}</h4>
                    <div className="footer-widget__links">
                      <ul>

                        {
                          item.links.map((link, i) => <li key={'footer-link' + i}>
                            <Link href={`${link?.link ? link.link : "/"}`}>{link.name}</Link>
                          </li>)
                        }

                      </ul>
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
