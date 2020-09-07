import React, { Component } from "react";
import fromCDN from "from-cdn";

const fields = {
  rows: ["form", "name"],
  columns: ["year", { id: "when", group: "dateByQuarter" }],
  values: [
    { id: "oil", method: "max" },
    { id: "oil", method: "min" },
  ],
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

class PivotLoadDataCdn extends Component {
  constructor(props) {
    super(props);

    this.loadCSV = this.loadCSV.bind(this);
    this.loadJSON = this.loadJSON.bind(this);
    this.restore = this.restore.bind(this);

    this.ready = fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot("pivot", {
        fields,
        fieldList,
      });
    });
  }

  componentWillUnmount() {
    this.pivot && this.pivot.destructor();
  }

  loadCSV() {
    this.pivot.load(
      "./static/dataset.csv",
      // eslint-disable-next-line no-undef
      new dhx.data.CsvDriver({
        names: ["name", "year", "continent", "form", "gdp", "oil", "balance", "when"],
      })
    );
  }

  loadJSON() {
    this.pivot.load("./static/dataset.json");
  }

  restore() {
    this.pivot.setData([]);
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={this.loadCSV}>
            Load CSV
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={this.loadJSON}>
            Load JSON
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={this.restore}>
            Restore
          </button>
        </section>
        <div className="dhx_sample-container__widget" id="pivot"></div>
      </div>
    );
  }
}

export default PivotLoadDataCdn;
