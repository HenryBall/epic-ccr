import { useState } from "react";

const Dropdown = ({ name, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <button
          type="button"
          className="inline-flex w-full rounded-sm border border-gray-400 shadow-sm px-6 py-2 bg-white text-sm text-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-200"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {name}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 right-0 bottom-0 h-full w-full cursor-default"
          ></button>
          <div className="origin-top-right absolute right-0 z-10 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, idx) => (
                <a
                  key={idx}
                  role="menuitem"
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
