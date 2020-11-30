import Statistic from "../Components/Statistic";

import { Droplet } from "react-feather";

import {
  getContaminantsAboveOrBelowMCL,
  getIncreasingOrDecreasingContaminants,
} from "../util/data";

const Statistics = ({ contaminants, scrollToContaminants }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div />
      <div>
        <div className="flex flex-col items-center">
          <Droplet size={64} className="text-primary" />
          <div className="h-8" />
          <div className="text-4xl font-bold text-black text-center">
            Your Water at a Glance
          </div>
        </div>
        <div className="h-8 md:h-24" />
        <div className="flex justify-items-center grid gap-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          <Statistic
            text="Violations Last Year"
            number={
              Object.keys(getContaminantsAboveOrBelowMCL(contaminants, true))
                .length
            }
          />
          <Statistic
            text="Increasing Contaminants"
            number={
              Object.keys(
                getIncreasingOrDecreasingContaminants(contaminants, true)
              ).length
            }
          />
          <Statistic
            text="Decreasing Contaminants"
            number={
              Object.keys(
                getIncreasingOrDecreasingContaminants(contaminants, false)
              ).length
            }
          />
        </div>
      </div>
      <div
        onClick={scrollToContaminants}
        className="cursor-pointer flex flex-col items-center text-primary"
      >
        <svg
          className="mt-4 w-6 h-6 animate-bounce hover:text-grey2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7"></path>
        </svg>
      </div>
    </div>
  );
};

export default Statistics;
