import React, { Component } from "react";
import fromCDN from "from-cdn";
import data from "../../dataset.json";

const fields = {
  rows: ["form", "year"],
  columns: [{ id: "when", group: "dateByQuarter" }],
  values: [
    { id: "oil", method: "max" },
    { id: "oil", method: "min" },
  ],
};

const mark = {
  min: "min_cell",
  max: "max_cell",
};

const fieldList = [
  { id: "name", label: "Name" },
  { id: "year", label: "Year" },
  { id: "continent", label: "Continent" },
  { id: "form", label: "Form" },
  { id: "gdp", label: "GDP" },
  { id: "oil", label: "Oil" },
  { id: "balance", label: "Balance" },
  { id: "when", label: "When", type: "date", format: "%d/%m/%Y" },
];

class PivotExportCdn extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot("pivot", {
        data,
        fields,
        fieldList,
        mark,
      });
    });
  }

  componentWillUnmount() {
    this.pivot && this.pivot.destructor();
  }

  runExport(type) {
    if (type === "xlsx") {
      this.pivot.export.xlsx({
        url: "//export.dhtmlx.com/excel",
      });
    }
    if (type === "csv") {
      this.pivot.export.csv();
    }
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.runExport("xlsx")}>
            Export xlsx
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.runExport("csv")}>
            Export csv
          </button>
        </section>
        <div className="dhx_sample-container__widget" id="pivot"></div>
      </div>
    );
  }
}

export default PivotExportCdn;
