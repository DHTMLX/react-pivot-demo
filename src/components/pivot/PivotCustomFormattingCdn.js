import React, { Component } from "react";
import fromCDN from "from-cdn";
import data from "../../dataset.json";

const fields = {
  rows: ["form", "name"],
  columns: ["year"],
  values: [{id: "oil", method: "count"}, {id: "gdp", method: "sum"}],
};

const fieldList = [
  {id: "name", label: "Name"},
  {id: "year", label: "Year"},
  {id: "continent", label: "Continent"},
  {id: "form", label: "Form"},
  {
    id: "gdp", label: "GDP", cellTemplate: function(val) {
      return "&euro; " + val;
    },
  },
  {id: "oil", label: "Oil"},
  {id: "balance", label: "Balance" },
  {id: "when", label: "When", type: "date", format: "%d/%m/%Y"},
];

const customFormat = function(cellValue, method) {
  if (method === "count") {
    return cellValue;
  }
  return cellValue.toLocaleString("de");
};

const layout = {
  footer: true,
};

class PivotCustomFormattingCdn extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js",
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css",
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot("pivot", {
        data,
        fields,
        fieldList,
        customFormat,
        layout
      });
    });
  }

  componentWillUnmount() {
    this.pivot && this.pivot.destructor();
  }

  render() {
    return (
      <div className="dhx_sample-container__widget" id="pivot"></div>
    );
  }
}

export default PivotCustomFormattingCdn;
