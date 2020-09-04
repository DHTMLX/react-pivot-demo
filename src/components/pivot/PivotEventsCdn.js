import React, { Component } from "react";
import fromCDN from "from-cdn";
import data from "../../dataset.json";

const fields = {
  rows: ["form", "name"],
  columns: ["year"],
  values: [{id: "oil", method: "count"}, {id: "oil", method: "sum"}],
};

const fieldList = [
  {id: "name", label: "Name"},
  {id: "year", label: "Year"},
  {id: "continent", label: "Continent"},
  {id: "form", label: "Form"},
  {id: "gdp", label: "GDP"},
  {id: "oil", label: "Oil"},
  {id: "balance", label: "Balance"},
  {id: "when", label: "When", type: "date", format: "%d/%m/%Y"},
];

const layout = {
  liveReload: false,
};

// let events = [];

class PivotEventsCdn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      events: []
		};

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
        layout
      });

      this.pivot.events.on("fieldClick", (e, id, type) => {
        const event = [{id: Math.random(), name: "fieldClick", value: `${JSON.stringify(e)}, ${id}, ${type}`}];
        this.setState(state => {
          const events = state.events.concat(event);
          return {
            events,
            isEmpty: false,
          };
        });
      });
      this.pivot.events.on("applyButtonClick", () => {
        const event = [{id: Math.random(), name: "applyButtonClick", value: ""}];
        this.setState(state => {
          const events = state.events.concat(event);
          return {
            events,
            isEmpty: false,
          };
        });
      });
      this.pivot.events.on("change", () => {
        const event = [{id: Math.random(), name: "change", value: ""}];
        this.setState(state => {
          const events = state.events.concat(event);
          return {
            events,
            isEmpty: false,
          };
        });
      });
      this.pivot.events.on("filterApply", (field, settings) => {
        const event = [{id: Math.random(), name: "filterApply", value: `${field}, ${JSON.stringify(settings)}`}];
        this.setState(state => {
          const events = state.events.concat(event);
          return {
            events,
            isEmpty: false,
          };
        });
      });
    });
  }

  componentWillUnmount() {
    this.pivot && this.pivot.destructor();
  }

  clearAll() {
    this.setState(state => ({
      events: [],
      isEmpty: true
    }));
  }

  render() {
    const isEmpty = this.state.isEmpty;
    return (
      <div className="dhx-container_inner events">
        <div className="dhx_sample-container__widget" id="pivot"></div>
        <div className="dhx_sample-container__sidebar">
          <div className="events-list--element" style={isEmpty ? {} : { display: "none" }}>
            No events yet
          </div>
          <div className="events-list--element dhx_sample-event" style={isEmpty ? { display: "none" } : {}}>
            {this.state.events.map(item => (
              <p key={item.id}>{item.name}: {item.value}</p>
            ))}
          </div>
        </div>
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.clearAll()}>Clear events</button>
        </section>
      </div>
    );
  }
}

export default PivotEventsCdn;
