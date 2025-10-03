export const portfolios = [
  {
    id: 1,
    categories: "cat--1 cat--4",
    title: "DApp Development",
    subtitle: "development",
    imgSrc: "/assets/images/portfolio/portfolio-01.jpg",
    altText: "Portfolio-01",
  },
  {
    id: 2,
    categories: "cat--2 cat--3",
    title: "De-Fi Platform",
    subtitle: "payment gateway",
    imgSrc: "/assets/images/portfolio/portfolio-02.jpg",
    altText: "Portfolio-02",
  },
  {
    id: 3,
    categories: "cat--3 cat--4 cat--1",
    title: "NFT marketplace",
    subtitle: "nft token",
    imgSrc: "/assets/images/portfolio/portfolio-03.jpg",
    altText: "Portfolio-03",
  },
  // {
  //   id: 4,
  //   categories: "cat--3 cat--2",
  //   title: "Native Application",
  //   subtitle: "development",
  //   imgSrc: "/assets/images/portfolio/portfolio-04.jpg",
  //   altText: "Portfolio-04",
  // },
  // {
  //   id: 5,
  //   categories: "cat--2 cat--4",
  //   title: "React Development",
  //   subtitle: "Application",
  //   imgSrc: "/assets/images/portfolio/portfolio-05.jpg",
  //   altText: "Portfolio-05",
  // },
  // {
  //   id: 6,
  //   categories: "cat--3 cat--2 cat--1",
  //   title: "App Installment",
  //   subtitle: "Photoshop",
  //   imgSrc: "/assets/images/portfolio/portfolio-06.jpg",
  //   altText: "Portfolio-06",
  // },
];
export const portfolioItems = [
  {
    id: 7,
    category: "cat--1 cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    alt: "Portfolio-01",
  },
  {
    id: 8,
    category: "cat--2 cat--3",
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    alt: "Portfolio-02",
  },
  {
    id: 9,
    category: "cat--3 cat--4 cat--1",
    imageSrc: "/assets/images/portfolio/portfolio-03.jpg",
    alt: "Portfolio-03",
  },
  {
    id: 10,
    category: "cat--3 cat--2",
    imageSrc: "/assets/images/portfolio/portfolio-04.jpg",
    alt: "Portfolio-04",
  },
  {
    id: 11,
    category: "cat--2 cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-05.jpg",
    alt: "Portfolio-05",
  },
  {
    id: 12,
    category: "cat--3 cat--2 cat--1",
    imageSrc: "/assets/images/portfolio/portfolio-06.jpg",
    alt: "Portfolio-06",
  },
  {
    id: 13,
    category: "cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    alt: "Portfolio-02",
  },
  {
    id: 14,
    category: "cat--4 cat--2",
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    alt: "Portfolio-01",
  },
  {
    id: 15,
    category: "cat--1 cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    alt: "Portfolio-01",
  },
  {
    id: 16,
    category: "cat--2 cat--3",
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    alt: "Portfolio-02",
  },
  {
    id: 17,
    category: "cat--3 cat--4 cat--1",
    imageSrc: "/assets/images/portfolio/portfolio-03.jpg",
    alt: "Portfolio-03",
  },
  {
    id: 18,
    category: "cat--3 cat--2",
    imageSrc: "/assets/images/portfolio/portfolio-04.jpg",
    alt: "Portfolio-04",
  },
];

export const allPortfolios = [...portfolios, ...portfolioItems];
export const filterButtons = [
  {
    filter: "*",
    label: "All",
  },
  {
    filter: ".cat--1",
    label: "DApp",
  },
  {
    filter: ".cat--2",
    label: "DeFi",
  },
  {
    filter: ".cat--3",
    label: "NFT",
  },
  {
    filter: ".cat--4",
    label: "DApp",
  },
];
