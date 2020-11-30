export const getContaminantsAboveOrBelowMCL = (contaminants, above) => {
  let ordered = {};
  Object.keys(contaminants)
    .filter((key) => {
      const mostRecentYear = Math.max(
        ...contaminants[key].map((record) => Number(record["Year"]))
      );
      const mostRecentMCL = Number(
        contaminants[key].find(
          (record) =>
            record["Type"] === "Maximum Contaminant Level (MCL)" &&
            record["Year"] == mostRecentYear
        )?.Concentration
      );
      const mostRecentSample = Number(
        contaminants[key].find(
          (record) =>
            record["Type"] === "Average Level" &&
            record["Year"] == mostRecentYear
        )?.Concentration
      );
      return above
        ? mostRecentMCL < mostRecentSample
        : mostRecentMCL > mostRecentSample;
    })
    .forEach((key) => {
      ordered[key] = contaminants[key];
    });
  return ordered;
};

export const getIncreasingOrDecreasingContaminants = (
  contaminants,
  increasing
) => {
  let ordered = {};
  Object.keys(contaminants)
    .filter((key) => {
      const years = contaminants[key].map((record) => Number(record["Year"]));
      let uniqueYears = years.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
      });
      const maxYear = Math.max(...uniqueYears);
      uniqueYears.splice(uniqueYears.indexOf(maxYear), 1);
      const prevYear = Math.max(...uniqueYears);
      const mostRecentSample = Number(
        contaminants[key].find(
          (record) =>
            record["Type"] === "Average Level" && record["Year"] == maxYear
        )?.Concentration
      );
      const prevSample = Number(
        contaminants[key].find(
          (record) =>
            record["Type"] === "Average Level" && record["Year"] == prevYear
        )?.Concentration
      );
      return increasing
        ? mostRecentSample > prevSample
        : mostRecentSample < prevSample;
    })
    .forEach((key) => {
      ordered[key] = contaminants[key];
    });
  return ordered;
};

export const processJsonRecords = (jsonArray) => {
  let processed = {};
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i].Contaminant in processed) {
      processed[jsonArray[i].Contaminant].push(jsonArray[i]);
    } else {
      processed[jsonArray[i].Contaminant] = [jsonArray[i]];
    }
  }
  return processed;
};
