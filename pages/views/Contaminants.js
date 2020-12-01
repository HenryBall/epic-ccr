import cx from "classnames";
import { useState } from "react";
import useIsInViewport from "use-is-in-viewport";

import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Contaminant from "../components/Contaminant";
import ContaminantTable from "../components/ContaminantTable";

import {
  getContaminantsAboveOrBelowMCL,
  getIncreasingOrDecreasingContaminants,
} from "../util/Data";

const Contaminants = ({ contaminants }) => {
  const [selected, setSelected] = useState();
  const [filterBy, setFilterBy] = useState();
  const [isInViewport, targetRef] = useIsInViewport();
  const [showingTable, setShowingTable] = useState(false);
  const [showingCharts, setShowingCharts] = useState(true);

  const generateTextStyles = (primary) => {
    return cx(
      "w-full",
      "text-3xl text-black",
      "font-bold tracking-wide",
      { "text-primary": primary }
      // { "animate__animated animate__fadeInUp": isInViewport }
    );
  };

  const onSelectDropdownSelect = (value) => {
    if (value === "None") {
      setSelected();
      setFilterBy();
    } else {
      setFilterBy();
      setSelected(value);
    }
  };

  const onFilterDropdownSelect = (value) => {
    if (value === "None") {
      setSelected();
      setFilterBy();
    } else {
      setSelected();
      setFilterBy(value);
    }
  };

  const renderContaminantsCharts = (contaminants) => {
    if (contaminants) {
      if (selected) {
        return (
          <Contaminant
            name={selected}
            records={contaminants[selected]}
            units={contaminants[selected][0]["Units"]}
          />
        );
      }
      if (filterBy) {
        let filtered;
        if (filterBy === "Above MCL") {
          filtered = getContaminantsAboveOrBelowMCL(contaminants, true);
          return Object.keys(filtered).map((contaminant, idx) => (
            <Contaminant
              key={idx}
              name={contaminant}
              records={contaminants[contaminant]}
              units={contaminants[contaminant][0]["Units"]}
            />
          ));
        }
        if (filterBy === "Below MCL") {
          filtered = getContaminantsAboveOrBelowMCL(contaminants, false);
          return Object.keys(filtered).map((contaminant, idx) => (
            <Contaminant
              key={idx}
              name={contaminant}
              records={contaminants[contaminant]}
              units={contaminants[contaminant][0]["Units"]}
            />
          ));
        }
        if (filterBy === "Increasing") {
          filtered = getIncreasingOrDecreasingContaminants(contaminants, true);
          return Object.keys(filtered).map((contaminant, idx) => (
            <Contaminant
              key={idx}
              name={contaminant}
              records={contaminants[contaminant]}
              units={contaminants[contaminant][0]["Units"]}
            />
          ));
        }
        if (filterBy === "Decreasing") {
          filtered = getIncreasingOrDecreasingContaminants(contaminants, false);
          return Object.keys(filtered).map((contaminant, idx) => (
            <Contaminant
              key={idx}
              name={contaminant}
              records={contaminants[contaminant]}
              units={contaminants[contaminant][0]["Units"]}
            />
          ));
        }
      }
      return Object.keys(contaminants).map((contaminant, idx) => (
        <Contaminant
          key={idx}
          name={contaminant}
          records={contaminants[contaminant]}
          units={contaminants[contaminant][0]["Units"]}
        />
      ));
    }
    return <div />;
  };

  const compressContaminantsForTable = (contaminants) => {
    let compressed = [];
    Object.keys(contaminants).forEach((key) => {
      let obj = { Contaminant: key };
      contaminants[key].forEach((record) => {
        if (record["Type"] === "Average Level") {
          obj["Average Level"] = record["Concentration"];
        }
        if (record["Type"] === "Maximum Contaminant Level (MCL)") {
          obj["Maximum Contaminant Level (MCL)"] = record["Concentration"];
        }
        if (record["Type"] === "Public Health Goal (PHG)") {
          obj["Public Health Goal (PHG)"] = record["Concentration"];
        }
        if (record["Units"] !== "") {
          obj["Units"] = record["Units"];
        }
      });
      compressed.push(obj);
    });
    return compressed;
  };

  const renderContaminantsTable = (contaminants) => {
    let compressed = [];
    if (selected) {
      compressed = compressContaminantsForTable({
        [selected]: contaminants[selected],
      });
    } else if (filterBy) {
      let temp;
      if (filterBy === "Above MCL") {
        temp = getContaminantsAboveOrBelowMCL(contaminants, true);
      }
      if (filterBy === "Below MCL") {
        temp = getContaminantsAboveOrBelowMCL(contaminants, false);
      }
      if (filterBy === "Increasing") {
        temp = getIncreasingOrDecreasingContaminants(contaminants, true);
      }
      if (filterBy === "Decreasing") {
        temp = getIncreasingOrDecreasingContaminants(contaminants, false);
      }
      compressed = compressContaminantsForTable(temp);
    } else {
      compressed = compressContaminantsForTable(contaminants);
    }
    return <ContaminantTable rows={compressed} />;
  };

  return (
    <div>
      <div className="pb-4 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-8 font-bold">
          <p className={generateTextStyles(true)} ref={targetRef}>
            Contaminants
          </p>
          <p className={generateTextStyles(false)}>Whats in your water?</p>
        </div>
        <div className="flex flex-row self-end md:self-center">
          <Dropdown
            name="Select"
            options={contaminants ? ["None", ...Object.keys(contaminants)] : []}
            onSelect={onSelectDropdownSelect}
          />
          <div className="w-4" />
          <Dropdown
            name="Filter By"
            options={[
              "None",
              "Above MCL",
              "Below MCL",
              "Increasing",
              "Decreasing",
            ]}
            onSelect={onFilterDropdownSelect}
          />
          <div className="w-4" />
          <Button
            pill={true}
            border={true}
            text={
              showingCharts
                ? "table view"
                : showingTable
                ? "chart view"
                : "switch view"
            }
            bgColor="white"
            textColor="primary"
            borderColor="primary"
            onClick={() => {
              setShowingTable((prev) => !prev);
              setShowingCharts((prev) => !prev);
            }}
          />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1">
        {showingTable && renderContaminantsTable(contaminants)}
        {showingCharts && renderContaminantsCharts(contaminants)}
      </div>
    </div>
  );
};

export default Contaminants;
