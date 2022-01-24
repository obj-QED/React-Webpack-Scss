import React from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "react-router-dom";

// STYLE
import '../../assets/style/index.scss';

// Image & Icon
import Logo from "../../assets/icons/logo.svg"
import ScrollDown from "../../assets/icons/homepage/mouse.svg";
import ImageVideo from "../../assets/images/hero-video.png";

// Component
import InfoHeading from '../../components/InfoHeading';
import SubscibeFrom from "../../components/SubcribeForm";
import Tabs from "../../components/TabItem";
import SlickSlider from '../../components/SlickSlider';
import Cta from '../../components/Cta';

// Data components
import { tabData } from "../../utils/content";
import { tabDataTwo } from "../../utils/content";
import { tabDataThree } from "../../utils/content";
import Footer from "../../components/Footer";


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
      </section>
      <section className="demonstration my-21">
        <InfoHeading
          classWrapper="mb-17 text-center"
          badge="Payment Feature"
          title="Making payments"
          descrpt="Make or request payments with a single click from within your ERP."
        />
        <Tabs items={tabData} mode='default'/>
      </section>
      <section className="demonstration my-21">
        <InfoHeading
          classWrapper="mb-17 text-center"
          badge="Payment Feature"
          title="Managing payments"
          descrpt="Make or request payments with a single click from within your ERP."
        />
        <Tabs items={tabDataTwo} mode='default'/>
      </section>
      <section className="demonstration my-21">
        <InfoHeading
          classWrapper="mb-17 text-center"
          badge="Payment flexibility"
          title="Managing payments"
          descrpt="Make or request payments with a single click from within your ERP."
        />
        <Tabs items={tabDataThree} mode='center-mode'/>
      </section>
      <section className="integration my-21">
        <InfoHeading
          title={"Seamless integration and payments connectivity"}
          descrpt={"SMART Hub can be embedded in the following ERPs and integrated with accounts from these banks:"}
          classWrapper={"mb-17 w-6/12 mx-auto text-center"}
        />
        <SlickSlider />
      </section>
      <section className="cta my-21">
        <Cta />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </React.Fragment>
  );
}
export default HomePage;
