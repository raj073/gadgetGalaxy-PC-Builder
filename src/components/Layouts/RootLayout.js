import React from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
