import React, { Component } from "react";
import fromCDN from "from-cdn";
import data from "../../dataset.json";

let data1 = [];
let data2 = [];
for (let i = 0; i < data.length - 1; i += 2) {
  data1.push(data[i]);
  data2.push(data[i + 1]);
}

const fields = {
  rows: ["form", "name"],
  columns: [{ id: "when", group: "dateByYear" }],
  values: [
    { id: "oil", method: "max" },
    { id: "oil", method: "sum" },
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

class PivotSetDataCdn extends Component {
  constructor(props) {
    super(props);

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

  runSetData(data) {
    if (data === 1) {
      this.pivot.setData(data1);
    }
    if (data === 2) {
      this.pivot.setData(data2);
    }
  }

  restore() {
    this.pivot.setData([]);
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.runSetData(1)}>
            Set data 1
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.runSetData(2)}>
            Set data 2
          </button>
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.restore()}>
            Restore
          </button>
        </section>
        <div className="dhx_sample-container__widget" id="pivot"></div>
      </div>
    );
  }
}

export default PivotSetDataCdn;
