import cx from "classnames";

const Button = ({
  text,
  pill,
  border,
  bgColor,
  textColor,
  borderColor,
  onClick,
}) => {
  const generateButtonStyles = () => {
    return cx(
      "text-lg font-light",
      "px-6 py-1 cursor-pointer",
      "transition duration-300 ease-in-out",
      `bg-${bgColor}`,
      `text-${textColor}`,
      `hover:text-${bgColor}`,
      `hover:bg-${textColor}`,
      { rounded: !pill },
      { "rounded-full": pill },
      { border: border },
      { [`border-${borderColor}`]: border }
    );
  };

  return (
    <div className={generateButtonStyles()} onClick={() => onClick()}>
      {/* <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> */}
      {text}
    </div>
  );
};

export default Button;
