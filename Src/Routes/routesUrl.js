var routes = {
  home: { GETRoute: "/", viewUrl: "./pages/index" },
  Portfolio: {
    GETRoute: "/Admin/Add/New/Portfolio",
    viewUrl: "./pages/addPortfolio",
    POSTRoute: "/addPortfolio",
  },
  contact: {
    GETRoute: "/",
    viewUrl: "",
    POSTRoute: "/contact",
  },
  DownloadCV: {
    GETRoute: "/mycv",
    viewUrl: "/public/assets/images/MyCVFile/Lateef Toyise-CV.pdf",
  },
};
export default routes;
