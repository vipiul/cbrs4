const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Biospecimens",
    link: "#",
    active: "",
    sub_menus: [
        {id: 1, title: "Biofluids", link: "/bio-fluids" },
        {id: 2, title: "Tissues", link: "/tissue" },
        {id: 3, title: "Stem And Immune Cells", link: "/stem-and-immune-cells" },
        {id: 4, title: "Customised Sets", link: "/customized-set" },
        
    ],
  },
  {
    id: 4,
    mega_menu: true,
    has_dropdown: true,
    title: "Laboratory and Biobank Services",
    link: "#",
    active: "",
    sub_menus: [
        { link: "/digital-pathology", title: "Digital Pathology" },
        { link: "/histopathology", title: "Histopathology" },
        { link: "/genomics", title: "Genomics" },
        { link: "/proteomics", title: "Proteomics" },
        { link: "/bioinformatics", title: "Bioinformatics" },
        { link: "/generation-sequencing-ngs", title: "Generation Sequencing (NGS)" },
        // { 
        //   id: 2,
        //   link: "#",
        //   title: "Services",
        //   services: [
        //     { link: "/digital-pathology", title: "Digital Pathology" },
        //     { link: "/histopathology", title: "Histopathology" },
        //     { link: "/genomics", title: "Genomics" },
        //     { link: "/proteomics", title: "Proteomics" },
        //     { link: "/bioinformatics", title: "Bioinformatics" },
        //     { link: "/generation-sequencing-ngs", title: "Generation Sequencing (NGS)" },
        //     { link: "/storage", title: "Storage" },
        //   ]
        // },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Storage",
    link: "/storage",
    active: "",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Research Papers",
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
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
