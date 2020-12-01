import { useRef, useState, useEffect } from "react";
import Papa from "papaparse";

import Head from "next/head";
import Landing from "../views/Landing";
import Statistics from "../views/Statistics";
import Contaminants from "../views/Contaminants";

import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";

import { processJsonRecords } from "../util/Data";

const Home = () => {
  const [loading, setLoading] = useState();
  const [contaminants, setContaminants] = useState();

  const statsRef = useRef(null);
  const contaminantsRef = useRef(null);
  const pageEndRef = useRef(null);

  const scrollToStats = () => {
    statsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContaminants = () => {
    contaminantsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // get & parse csv
  useEffect(() => {
    async function getData() {
      const response = await fetch("/data2.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: true });
      const rows = results.data;
      const processed = processJsonRecords(rows);
      setLoading(false);
      setContaminants(processed);
    }
    if (!contaminants) {
      setLoading(true);
      getData();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Henry Ball</title>
      </Head>
      <div className="h-full xl:h-screen bg-gray-100">
        <div className="h-full py-12 px-12 md:px-48">
          <Landing scrollToStats={scrollToStats} />
        </div>
      </div>
      {!loading && contaminants && (
        <>
          <div ref={statsRef} />
          <div className="h-screen bg-white">
            <div className="h-full py-12 px-12 md:px-48">
              <Statistics
                contaminants={contaminants}
                scrollToContaminants={scrollToContaminants}
              />
            </div>
          </div>
          <div ref={contaminantsRef} />
          <div className="py-12 px-12 md:px-12 bg-gray-100">
            <Contaminants contaminants={contaminants} />
          </div>
          <div className="px-12 md:px-24 bg-primary">
            <Footer1 />
          </div>
          <div className="bg-gray-100">
            <Footer2 />
          </div>
          <div ref={pageEndRef} />
        </>
      )}
    </div>
  );
};

export default Home;
