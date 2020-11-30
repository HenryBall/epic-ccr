import cx from "classnames";
import { useState } from "react";
import useIsInViewport from "use-is-in-viewport";

import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Contaminant from "../components/Contaminant";
import ContaminantTable from "../components/ContaminantTable";

import { getContaminantsAboveOrBelowMCL } from "../util/data";

const Contaminants = ({ contaminants }) => {
  const [loading, setLoading] = useState();
  const [orderBy, setOrderBy] = useState();
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

  const onFilterDropdownSelect = (value) => {
    if (value === "None") {
      setOrderBy();
      setFilterBy();
    } else {
      setOrderBy();
      setFilterBy(value);
    }
  };

  const onOrderDropdownSelect = (value) => {
    if (value === "None") {
      setOrderBy();
      setFilterBy();
    } else {
      setFilterBy();
      setOrderBy(value);
    }
  };

  const renderContaminantsCharts = (contaminants) => {
    if (contaminants) {
      if (filterBy) {
        return <Contaminant name={filterBy} records={contaminants[filterBy]} />;
      }
      if (orderBy) {
        let ordered;
        if (orderBy === "Above MCL") {
          ordered = getContaminantsAboveOrBelowMCL(contaminants, true);
          return Object.keys(ordered).map((contaminant, idx) => (
            <Contaminant
              key={idx}
              name={contaminant}
              records={contaminants[contaminant]}
            />
          ));
        }
        if (orderBy === "Below MCL") {
          ordered = getContaminantsAboveOrBelowMCL(contaminants, false);
          return Object.keys(ordered).map((contaminant, idx) => (
            <Contaminant
              key={idx}
              name={contaminant}
              records={contaminants[contaminant]}
            />
          ));
        }
      }
      return Object.keys(contaminants).map((contaminant, idx) => (
        <Contaminant
          key={idx}
          name={contaminant}
          records={contaminants[contaminant]}
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
        if (record["Source"] !== "") {
          obj["Source"] = record["Source"];
        }
      });
      compressed.push(obj);
    });
    return compressed;
  };

  const renderContaminantsTable = (contaminants) => {
    let compressed = [];
    if (filterBy) {
      compressed = compressContaminantsForTable({
        [filterBy]: contaminants[filterBy],
      });
    } else if (orderBy) {
      const temp = getContaminantsAboveOrBelowMCL(
        contaminants,
        orderBy === "Above MCL" ? true : false
      );
      compressed = compressContaminantsForTable(temp);
    } else {
      compressed = compressContaminantsForTable(contaminants);
    }
    return <ContaminantTable rows={compressed} />;
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-8 font-bold">
          <p className={generateTextStyles(true)} ref={targetRef}>
            Contaminants
          </p>
          <p className={generateTextStyles(false)}>Whats in your water?</p>
        </div>
        <div className="flex flex-row self-end md:self-center">
          <Dropdown
            name="Filter"
            options={contaminants ? ["None", ...Object.keys(contaminants)] : []}
            onSelect={onFilterDropdownSelect}
          />
          <div className="w-4" />
          <Dropdown
            name="Order By"
            options={[
              "None",
              "Above MCL",
              "Below MCL",
              // "Increasing",
              // "Decreasing",
            ]}
            onSelect={onOrderDropdownSelect}
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
              setLoading(true);
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
