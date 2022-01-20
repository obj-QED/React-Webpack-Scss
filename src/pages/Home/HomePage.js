import React from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "react-router-dom";

// Image & Icon
import Logo from "../../assets/icons/logo.svg"

// Style
import "../../assets/style/index.scss";

// Component
import SubscibeFrom from "../../components/SubcribeForm";
import Tabs from "../../components//TabItem";
import  { tabData } from "../../utils/content"


const HomePage = () => {
  return (
    <section className="hero">
      <Tabs items={ tabData } />
{/*       
      <div className="logo">
        <Link 
        to="/"
        className="logo__link flex items-center"
        >
          <Logo alt="logo" />
          <p className="ml-3 uppercase">Smart hub</p>
        </Link>
      </div> */}
    </section>
  );
}
export default HomePage;