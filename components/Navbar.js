import Button from "./Button";

const Navbar = ({ scrollToBottom }) => {
  return (
    <div className="h-20 px-8 md:px-20 flex flex-row justify-between items-center">
      <div>
        <span className="text-2xl antialiased font-bold tracking-wider border-primary text-black">
          Henry
        </span>
        <span className="text-2xl antialiased font-bold tracking-wider border-primary text-black">
          Ball
        </span>
      </div>
      <div className="flex flex-row items-center">
        <div className="font-light text-xl text-grey2 mr-4 md:mr-10 cursor-pointer">
          About
        </div>
        <Button
          pill={true}
          border={true}
          text="Contact"
          bgColor="white"
          textColor="primary"
          borderColor="primary"
          onClick={() => scrollToBottom()}
        />
      </div>
    </div>
  );
};

export default Navbar;
