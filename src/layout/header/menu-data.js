const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
     link: "/",
    active: "",
  /* sub_menus: [
      { link: "/", title: "Home Style 1" },
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },
    ], */
  },
  {
    id: 2,
      mega_menu: false,
      has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: "",
   /* sub_menus: [
      { link: "/about", title: "About" },
      { link: "/team-1", title: "Team 01" },
      { link: "/team-2", title: "Team 02" },
      { link: "/team-details", title: "Team Details" },
      { link: "/pricing-plan", title: "Pricing Plan" },
      { link: "/shop", title: "Shop" },
      { link: "/product-details", title: "Product Details" },
      { link: "/cart", title: "cart" },
      { link: "/checkout", title: "Checkout" },
      { link: "/project-details", title: "Project Details" },
      { link: "/faq", title: "FAQ's" },
    ],*/
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Laboratory and Biobank",
    link: "laboratory-and-biobank",
    active: "",
    sub_menus: [
        { link: "/digital-pathology", title: "Digital Pathology" },
        { link: "/histopathology", title: "Histopathology" },
        { link: "/genomics", title: "Genomics" },
        { link: "/proteomics", title: "Proteomics" },
        { link: "/bioinformatics", title: "Bioinformatics" },
        { link: "/generation-sequencing-ngs", title: "Generation Sequencing (NGS)" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Research Paper",
    link: "/research",
    active: "",
  },
 /* {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },*/
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
