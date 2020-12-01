import LineChart from "./LineChart";

import { MapPin, AlertTriangle } from "react-feather";

const Contaminant = ({ name, records, units }) => {
  const processRecordsForChart = (records) => {
    let data = {};
    records.forEach((record) => {
      if (record["Year"] in data) {
        data[record["Year"]][record["Type"]] = record["Concentration"];
      } else {
        data[record["Year"]] = {
          [record["Type"]]: record["Concentration"],
          Name: record["Year"],
        };
      }
    });
    return Object.keys(data).map((key) => data[key]);
  };

  const getSourcesFromRecords = (records) => {
    let source = "";
    for (let record of records) {
      if (record["Source"] !== "") {
        source = record["Source"];
        break;
      }
    }
    return source;
  };

  const getRisksFromRecords = (records) => {
    let healthRisks = "";
    for (let record of records) {
      if (record["Health Risks"] !== "") {
        healthRisks = record["Health Risks"];
        break;
      }
    }
    return healthRisks;
  };

  return (
    <div className="py-8 border-t border-gray-300">
      <p className="text-2xl font-bold text-black">
        {name + " (" + units + ")"}
      </p>
      <div className="h-4" />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="col-span-1 p-8 rounded border border-black bg-white">
          <LineChart data={processRecordsForChart(records)} />
        </div>
        <div className="col-span-1 grid gap-8 grid-cols-1">
          <div className="p-8 rounded border border-black bg-white">
            <div className="flex flex-row items-center">
              <MapPin className="text-primary" />
              <div className="w-2" />
              <div className="text-2xl font-bold text-black">Sources</div>
            </div>
            <div className="h-4" />
            <div>{getSourcesFromRecords(records)}</div>
          </div>
          <div className="p-8 rounded border border-black bg-white">
            <div className="flex flex-row items-center">
              <AlertTriangle className="text-red-400" />
              <div className="w-2" />
              <div className="text-2xl font-bold text-black">Health Risks</div>
            </div>
            <div className="h-4" />
            <div>{getRisksFromRecords(records)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contaminant;
