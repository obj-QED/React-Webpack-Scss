import React from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "react-router-dom";

// Image & Icon
import Logo from "../../assets/icons/logo.svg"
import ScrollDown from "../../assets/icons/homepage/mouse.svg";
import ImageVideo from "../../assets/images/hero-video.png";

// Component
import SubscibeFrom from "../../components/SubcribeForm";
import Tabs from "../../components/TabItem";
import { tabData } from "../../utils/content";


const HomePage = () => {
  return (
    <React.Fragment>
      <section className="hero mt-24">
        <div className="flex justify-between flex-row items-center">
          <div className="w-5/12 column">
            <div className="logo mb-8 w-max">
              <Link
                to="/"
                className="logo__link flex items-center"
              >
                <Logo alt="logo" />
                <p className="ml-3 uppercase">Smart hub</p>
              </Link>
            </div>
            <div className="hero__content mb-10">
              <h1 className="title pb-5">
                A feature-rich embedded
                <span className="text-blueCustom-100"> payment portal</span>
              </h1>
              <p className="text">
                See how SMART Hub works and discover the features that enable any business make and receive payments from a single place.
              </p>
            </div>
            <SubscibeFrom />
            <div className="scroll-down inline-flex items-center mt-17">
              <span className="text">
                Scroll down for features
              </span>
              <span>
                <ScrollDown className="icon ml-3" />
              </span>
            </div>
          </div>
          <div className="w-7/12 column">
            <img src={ImageVideo} style={{ 'position': 'absolute', top: 0, right: 'auto' }} />
          </div>
        </div>
        {/* <Tabs items={tabData} /> */}
      </section>
      <section className="demonstration my-21">
        <div className="heading mb-17 text-center column">
          <div className="badge">
            <span className="text">Payment Feature</span>
          </div>
          <div className="title my-6">
            Payment flexibility
          </div>
          <div className="description">
            Make or request payments with a single click from within your ERP.
          </div>
        </div>
        <Tabs items={tabData} />
      </section>
    </React.Fragment>
  );
}
export default HomePage;