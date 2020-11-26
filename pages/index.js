import { useRef } from "react";

import Head from "next/head";
import Landing from "./views/Landing";
import Statistics from "./views/Statistics";
import Contaminants from "./views/Contaminants";

import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

const Home = () => {
  const startRef = useRef(null);
  const pageEndRef = useRef(null);

  const scrollToStart = () => {
    startRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>Henry Ball</title>
      </Head>
      <div className="h-screen bg-grey">
        {/* <Navbar scrollToBottom={scrollToBottom } /> */}
        <div className="h-full py-8 px-8 md:px-12">
          <Landing scrollToStart={scrollToStart} />
        </div>
      </div>
      <div ref={startRef} />
      <div className="py-8 px-12 md:px-48">
        <Statistics />
      </div>
      <div className="py-12 px-8 md:px-12 bg-grey">
        <Contaminants />
      </div>
      <div className="px-8 md:px-24 bg-primary">
        <Footer1 />
      </div>
      <div className="bg-grey">
        <Footer2 />
      </div>
      <div ref={pageEndRef} />
    </div>
  );
};

export default Home;
