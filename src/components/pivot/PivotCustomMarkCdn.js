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

const mark = function (cell, columnData, _row, column) {
  if (column.method === "max") {
    var max = Math.max.apply(null, columnData);
    if (max === parseFloat(cell)) {
      return "biggestMaxCell";
    }
    return "customMaxCell";
  }
  if (cell < 10 && cell !== null) {
    return "mark";
  }
  return false;
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

class PivotCustomMarkCdn extends Component {
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

  render() {
    return <div className="dhx_sample-container__widget" id="pivot"></div>;
  }
}

export default PivotCustomMarkCdn;
