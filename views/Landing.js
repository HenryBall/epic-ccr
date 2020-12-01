import { useState } from "react";
import Image from "next/image";
import Modal from "../components/Modal";
import Button from "../components/Button";

const Landing = ({ scrollToStats }) => {
  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const [isModalThreeOpen, setIsModalThreeOpen] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between">
      <Modal
        isOpen={isModalOneOpen}
        close={() => setIsModalOneOpen(false)}
        title="Where does our water come from?"
        paragraphs={[
          "The OurTown Water System utilizes water from all five water bodies within the town. These bodies of water comprise the OurTown watershed which flows into the OurTown Reservoir via gravity. From the reservoir, the water is pumped to the OurTown Filtration Plant where it receives the following treatment:",
          "1) Water travels through screens to remove large debris",
          "2) Ozone is added to kill bacteria and improve the taste and odor of the water",
          "3) Treatment chemicals are added to form larger particles called floc. This makes the next step, filtration, easier.",
          "4) Coal and gravel filtration removes the floc and treatment chemicals",
          "5) Chloramine (chlorine plus ammonia) is added to kill remaining microorganisms and to keep the water safe as it travels to your tap.",
        ]}
      />
      <Modal
        isOpen={isModalTwoOpen}
        close={() => setIsModalTwoOpen(false)}
        title="How can I help conserve water?"
        paragraphs={[
          "Because the entirety of our water supply is locally sourced, it is extremely important to protect the health of OurTown’s water bodies. You can help by properly disposing of harmful materials, limiting the use of pesticides or fertilizers, properly disposing of your medications, and maintaining your septic system. It is also important to remember that our water supply is limited. Please do your part and use water responsibility.",
          "You can do so by identifying and quickly fixing water leaks, watering your lawn only when necessary, planting drought resistant plants, taking shorter showers, and installing water saving fixtures when possible. Every drop counts!",
        ]}
      />
      <Modal
        isOpen={isModalThreeOpen}
        close={() => setIsModalThreeOpen(false)}
        title="How does water impact my health?"
        paragraphs={[
          "Both tap and bottled drinking water can be expected to have at least small levels of some contaminants; however, this doesn’t indicate that your water poses and health risks. Water travels a long way from the source to your tap and can pick up various substances along the way. Contaminants that may be present in source water include:",
          "• Microbial contaminants, such as viruses and bacteria, that may come from sewage treatment plants, septic systems, agricultural livestock operations, and wildlife.",
          "• Inorganic contaminants, such as salts and metals, that can be naturally-occurring or result from urban stormwater runoff, industrial or domestic wastewater discharges, oil and gas production, mining, or farming.",
          "• Pesticides and herbicides, that may come from a variety of sources such as agriculture, urban stormwater runoff, and residential uses.",
          "• Organic chemical contaminants, including synthetic and volatile organic chemicals, that are by-products of industrial processes and petroleum production, and can also come from gas stations, urban stormwater runoff, agricultural application, and septic systems.",
          "• Radioactive contaminants, that can be naturally-occurring or be the result of oil and gas production and mining activities.",
          "Those who are immune-compromised may be more vulnerable to certain contaminants. This includes those with cancer who must undergo chemotherapy, those who have had organ transplants, those with HIV/AIDs of other immune system disorders, and some elderly and infants. If you are concerned about how your drinking water may affect your health, please consult a health care provider.",
        ]}
      />
      <div>
        <div className="text-4xl font-bold text-primary">OurTown</div>
        <div className="text-4xl font-bold text-black">
          Drinking Water Consumer Confidence Report.
        </div>
        <div className="h-12" />
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-start">
          <Image
            className="rounded-md"
            src="/utsman-media-FxsTOJ2NRdo-unsplash.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
            layout="intrinsic"
          />
          <div className="h-4" />
          <div className="text-xl font-bold text-black">
            Where does my water come from?
          </div>
          <div className="h-4" />
          <Button
            pill={true}
            border={true}
            text="learn more"
            bgColor="white"
            textColor="primary"
            borderColor="primary"
            onClick={() => setIsModalOneOpen(true)}
          />
        </div>
        <div className="flex flex-col items-start">
          <Image
            className="rounded-md"
            src="/alexandre-lecocq-v-8o8vGMg3s-unsplash.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
            layout="intrinsic"
          />
          <div className="h-4" />
          <div className="text-xl font-bold text-black">
            How can I help conserve water?
          </div>
          <div className="h-4" />
          <Button
            pill={true}
            border={true}
            text="learn more"
            bgColor="white"
            textColor="primary"
            borderColor="primary"
            onClick={() => setIsModalTwoOpen(true)}
          />
        </div>
        <div className="flex flex-col items-start">
          <Image
            className="rounded-md"
            src="/johnny-mcclung-uDM99xirqI4-unsplash.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
            layout="intrinsic"
          />
          <div className="h-4" />
          <div className="text-xl font-bold text-black">
            How does water impact my health?
          </div>
          <div className="h-4" />
          <Button
            pill={true}
            border={true}
            text="learn more"
            bgColor="white"
            textColor="primary"
            borderColor="primary"
            onClick={() => setIsModalThreeOpen(true)}
          />
        </div>
      </div>
      <div
        onClick={scrollToStats}
        className="cursor-pointer flex flex-col items-center text-primary"
      >
        <svg
          className="mt-4 w-6 h-6 animate-bounce hover:text-grey2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7"></path>
        </svg>
      </div>
    </div>
  );
};

export default Landing;
