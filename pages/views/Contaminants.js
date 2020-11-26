import { useState } from "react";
import cx from "classnames";
import useIsInViewport from "use-is-in-viewport";

import Dropdown from "../components/Dropdown";
import Contaminant from "../components/Contaminant";

const BlogPosts = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  const generateTextStyles = (primary) => {
    return cx(
      "w-full",
      "text-3xl text-black",
      "font-bold tracking-wide",
      { "text-primary": primary },
      { "animate__animated animate__fadeInUp": isInViewport }
    );
  };

  const onDropdownSelect = (value) => {
    console.log("hi");
    console.log(value);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mb-8 font-bold">
          <p className={generateTextStyles(true)} ref={targetRef}>
            Contaminants
          </p>
          <p className={generateTextStyles(false)}>Whats in your water?</p>
        </div>
        <div>
          <Dropdown
            name="Order By"
            options={[
              "highest risk",
              "largest increase",
              "highest concentration",
            ]}
            onSelect={onDropdownSelect}
          />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1">
        <Contaminant score={10} name="Nitrate" elements={["NI"]} />
        <Contaminant score={7} name="Chlorine" elements={["Cl"]} />
        <Contaminant score={4} name="Arsenic" elements={["Ar"]} />
      </div>
    </div>
  );
};

export default BlogPosts;
