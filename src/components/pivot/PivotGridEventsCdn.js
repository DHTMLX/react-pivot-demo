import React, { Component } from "react";
import fromCDN from "from-cdn";
import data from "../../dataset.json";

const fields = {
  rows: ["form", "name"],
  columns: ["year"],
  values: [
    { id: "oil", method: "count" },
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

const layout = {
  liveReload: false,
};

const eventsArray = [
  "scroll",
  "sort",
  "expand",
  "filterChange",
  "beforeResizeStart",
  "resize",
  "afterResizeEnd",
  "cellClick",
  "cellRightClick",
  "cellMouseOver",
  "cellMouseDown",
  "cellDblClick",
  "headerCellClick",
  "footerCellClick",
  "headerCellMouseOver",
  "footerCellMouseOver",
  "headerCellMouseDown",
  "footerCellMouseDown",
  "headerCellDblClick",
  "footerCellDblClick",
  "headerCellRightClick",
  "footerCellRightClick",
  "beforeEditStart",
  "afterEditStart",
  "beforeEditEnd",
  "afterEditEnd",
  "beforeKeyDown",
  "afterKeyDown",
];

class PivotGridEventsCdn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      events: [],
    };

    this.ready = fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot("pivot", {
        data,
        fields,
        fieldList,
        layout,
      });

      eventsArray.forEach(event => {
        this.pivot.grid.events.on(event, (...args) => {
          args = args.map(item => JSON.stringify(item));
          const eventItem = [{ id: Math.random(), name: event, value: `${args}` }];
          this.setState(state => {
            const events = state.events.concat(eventItem);
            return {
              events,
              isEmpty: false,
            };
          });
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
      isEmpty: true,
    }));
  }

  render() {
    const isEmpty = this.state.isEmpty;
    return (
      <div className="dhx-container_inner">
      <section className="dhx_sample-controls">
        <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.clearAll()}>
          Clear events
        </button>
      </section>
      <div className="dhx-events">
        <div className="dhx_sample-container__widget" id="pivot"></div>
        <div className="dhx_sample-container__sidebar">
          <div className="events-list--element" style={isEmpty ? {} : { display: "none" }}>
            No events yet
          </div>
          <div className="events-list events-list-wrapper" style={isEmpty ? { display: "none" } : {}}>
            {this.state.events.reverse().map(item => (
              <div className="events-list--element" style={isEmpty ? { display: "none" } : {}}>
                <p key={item.id}>
                  {item.name}: {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default PivotGridEventsCdn;
