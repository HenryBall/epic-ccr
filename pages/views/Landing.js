const Landing = ({ scrollToStart, scrollToBottom }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="text-4xl font-bold text-black">
          Consumer Confidence Report
        </div>
        <div className="text-4xl font-bold text-primary">
          A comprehensive summary of your drinking water quality.
        </div>
        <div className="h-12" />
      </div>
      <div
        onClick={scrollToStart}
        className="cursor-pointer flex flex-col items-center text-primary"
      >
        <div className="text-3xl text-center font-thin hover:text-grey2">
          see more
        </div>
        <svg
          className="mt-4 w-6 h-6 animate-bounce hover:text-grey2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Landing;
