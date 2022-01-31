import React from "react";
import { Link } from "react-router-dom";

// Component
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <React.Fragment>
    <SEO
    title="404: Not found"
    description="Test description"
    keywords="smart hub, smart hub page, smart hub page demo"
    image={`/assets/images/hero-video.png`}
    />
    <div className="error-page h-screen flex justify-center items-center overflow-hidden flex-wrap flex-col">
      <div className="w-full flex justify-center flex-row-reverse">
        <h3 className="text-normal leading-6 font-bold ml-2 -mt-4">404</h3>
        <h1 className="text-6xl leading-10 font-extrabold mb-4">NOT FOUND</h1>
      </div>
      <p className="text-gray-300 text-xl leading-8 font-medium">We couldn't find this page.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  </React.Fragment>
)

export default NotFoundPage;
