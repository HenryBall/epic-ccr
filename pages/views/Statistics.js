import Statistic from "../components/Statistic";
import { Camera } from "react-feather";

const Statistics = () => {
  return (
    <div className="h-screen flex justify-items-center grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
      {/* <Camera /> */}
      <Statistic text="Number of Violations Last Year" number="3" />
      <Statistic text="Number of Violations Last Year" number="18" />
      <Statistic text="Number of Violations Last Year" number="5" />
    </div>
  );
};

export default Statistics;
