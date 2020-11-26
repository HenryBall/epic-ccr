import { useState } from "react";

import Button from "./Button";
import LineChart from "./LineChart";

const data = {
  year: 2019,
  Arsenic: 5,
  "Arsenic MCL": 10,
};

const Contaminant = ({ name, score, elements }) => {
  const [showingChart, setShowingChart] = useState(false);

  return (
    <div>
      <p className="text-2xl font-bold text-black">{name}</p>
      <div className="grid gap-8 grid-cols-4">
        <div className="col-span-2 p-8 rounded border-2 border-black bg-white">
          <LineChart name={name} />
        </div>
        <div className="p-8 rounded border-2 border-black bg-white">
          Some Content
        </div>
        <div className="p-8 rounded border-2 border-black bg-white">
          Some Content
        </div>
      </div>
    </div>
  );
};

export default Contaminant;
