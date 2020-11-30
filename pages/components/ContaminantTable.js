import cx from "classnames";

const ContaminantTable = ({ rows }) => {
  const generateRowStyles = (idx) => {
    return cx({ "bg-primary bg-opacity-10": idx % 2 === 0 });
  };

  return (
    <table className="bg-white border border-grey-100 rounded-sm">
      <thead>
        <tr>
          <th className="p-4 text-left border border-grey-100">Contaminant</th>
          <th className="p-4 text-left border border-grey-100">Units</th>
          <th className="p-4 text-left border border-grey-100">
            Average Level
          </th>
          <th className="p-4 text-left border border-grey-100">
            Maximum Contaminant Level (MCL)
          </th>
          <th className="p-4 text-left border border-grey-100">
            Public Health Goal (PHG)
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className={generateRowStyles(idx)}>
            <td className="p-4">{row["Contaminant"]}</td>
            <td className="p-4">{row["Units"]}</td>
            <td className="p-4">{row["Average Level"]}</td>
            <td className="p-4">{row["Maximum Contaminant Level (MCL)"]}</td>
            <td className="p-4">{row["Public Health Goal (PHG)"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContaminantTable;
