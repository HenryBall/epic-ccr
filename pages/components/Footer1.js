import Button from "./Button";

const Footer1 = () => {
  return (
    <div
      style={{ height: "250px" }}
      className="flex flex-col justify-center items-center"
    >
      <p className="mb-6 text-3xl font-bold tracking-wide text-white">
        Get in touch!
      </p>
      <div className="flex">
        <Button
          pill={true}
          border={true}
          text="LinkedIn"
          bgColor="primary"
          textColor="white"
          borderColor="white"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/henry-ball-789644139",
              "_blank"
            )
          }
        />
        <div className="w-4" />
        <Button
          pill={true}
          border={true}
          text="Email"
          bgColor="primary"
          textColor="white"
          borderColor="white"
          onClick={() => window.open("mailto: henryball96gmail.com", "_blank")}
        />
        <div className="w-4" />
        <Button
          pill={true}
          border={true}
          text="Github"
          bgColor="primary"
          textColor="white"
          borderColor="white"
          onClick={() => window.open("https://github.com/HenryBall", "_blank")}
        />
      </div>
    </div>
  );
};

export default Footer1;
