import { useCountUp } from "react-countup";
import useIsInViewport from "use-is-in-viewport";

const Statistic = ({ text, number }) => {
  const { countUp } = useCountUp({ end: number });
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <div
      ref={targetRef}
      className="w-64 flex flex-col justify-center text-center"
    >
      <div className="text-xl font-bold text-black">{text}</div>
      {isInViewport && (
        <div className="text-6xl font-bold text-primary">{countUp}</div>
      )}
    </div>
  );
};

export default Statistic;
