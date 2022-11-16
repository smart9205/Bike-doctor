import React from "react";
import Banner from "./Banner";
import Business from "./Business";
import Conected from "./Conected";
import Cosuter from "./Cosuter";
import Footer from "./Footer";
import Parts from "./Parts";
import PartsInformation from "./PartsInformation";
import Reply from "./Reply";
import Review from "./Review";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Parts></Parts>
      <Business></Business>
      <Review></Review>
      <Conected></Conected>
      <PartsInformation></PartsInformation>
      <Cosuter></Cosuter>
      <Reply></Reply>
    </div>
  );
};

export default Home;
