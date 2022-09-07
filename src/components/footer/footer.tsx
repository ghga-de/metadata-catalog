import React from "react";
import FooterIcons from "./footerIcons";
import FooterNavbar from "./footerNavbar";

const Footer = () => {
  const svgCode: string =
    '<svg width="1440" height="120" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1482 66.8182H1119.93C854.272 66.8182 592.376 0 364.5 0C136.624 0 -8 66.8182 -8 66.8182V120H1482V66.8182Z" fill="#fff"/></svg>';
  const svgEncoded: string = btoa(svgCode);
  return (
    <footer>
      <FooterNavbar />
      <div
        style={{
          background: "url('data:image/svg+xml;base64," + svgEncoded + "')",
          height: "70px",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center bottom",
        }}
        className="bg-primary mw-100 w-100 mx-0"
      >
        &nbsp;
      </div>
      <div className="mx-auto w-75 px-5">
        <FooterIcons></FooterIcons>
      </div>
    </footer>
  );
};

export default Footer;
