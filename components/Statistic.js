import { useEffect } from "react";
import { useCountUp } from "react-countup";
import useIsInViewport from "use-is-in-viewport";

const Statistic = ({ text, number }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  const { countUp, start } = useCountUp({
    start: 0,
    end: number,
    delay: 500,
    duration: 2,
  });

  useEffect(() => {
    if (isInViewport) {
      start();
    }
  }, [isInViewport]);

  return (
    <div
      ref={targetRef}
      className="w-64 flex flex-col justify-center text-center"
    >
      <div className="text-xl font-bold text-gray-400">{text}</div>
      <div className="h-4" />
      <div className="text-6xl font-bold text-primary">{countUp}</div>
    </div>
  );
};

export default Statistic;
