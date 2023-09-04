const social_links = [
  // {
  //   link: "https://www.youtube.com/",
  //   target: "_blank",
  //   icon: "fab fa-youtube",
  //   color: "tp-f-youtube",
  // },
  {
    link: "https://twitter.com/Sutapa087",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "tp-f-twitter",
  },
  {
    link: "https://www.linkedin.com/in/clinical-biosamples-and-research-services/",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    // <i class="fab fa-linkedin-in"></i>
    color: "tp-f-fb",
  },
  // {
  //   link: "https://www.skype.com/en/",
  //   target: "_blank",
  //   icon: "fab fa-skype",
  //   color: "tp-f-skype",
  // },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
