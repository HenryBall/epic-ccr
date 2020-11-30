import Button from "./Button";

import { Mail, Phone } from "react-feather";

const Footer1 = () => {
  return (
    <div
      style={{ height: "250px" }}
      className="flex flex-col justify-center items-center"
    >
      <p className="mb-6 text-3xl font-bold tracking-wide text-white">
        Get in touch!
      </p>
      <div className="flex text-white">
        <div className="flex flex-row">
          <Mail />
          <div className="w-2" />
          <div>water.district@ourtown.com</div>
        </div>
        <div className="w-8" />
        <div className="flex flex-row">
          <Phone />
          <div className="w-2" />
          <div>(555) 555-5555</div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
