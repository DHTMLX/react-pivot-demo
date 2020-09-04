import React from "react";
import { storiesOf } from "@storybook/react";
import PivotInitCdn from "../components/pivot/PivotInitCdn";
import PivotLoadDataCdn from "../components/pivot/PivotLoadDataCdn";
import PivotExportCdn from "../components/pivot/PivotExportCdn";
import PivotSetDataCdn from "../components/pivot/PivotSetDataCdn";
import PivotStructureReloadCdn from "../components/pivot/PivotStructureReloadCdn";
import PivotCustomMarkCdn from "../components/pivot/PivotCustomMarkCdn";
import PivotCustomFormattingCdn from "../components/pivot/PivotCustomFormattingCdn";
import PivotFooterCdn from "../components/pivot/PivotFooterCdn";
import PivotEventsCdn from "../components/pivot/PivotEventsCdn";
import PivotGridEventsCdn from "../components/pivot/PivotGridEventsCdn";

storiesOf("Pivot", module)
  .add("Initialization", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Pivot initialization</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotInitCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__initialization.html#initializingpivot"
              target="_blank"
            >
              Initialization.
            </a>
            <a
              href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#loadinginlinedata"
              target="_blank"
            >
              Loading Inline Data
            </a>
          </div>
        </div>
        <PivotInitCdn></PivotInitCdn>
      </section>
    );
  })
  .add("Loading Data", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Load data in Json and Csv formats</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotLoadDataCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#externaldataloading"
              target="_blank"
            >
              External Data Loading
            </a>
          </div>
        </div>
        <PivotLoadDataCdn></PivotLoadDataCdn>
      </section>
    );
  })
  .add("Export Data", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>You can export Pivot to the Excel or CSV format</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotExportCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__export.html"
              target="_blank"
            >
              Exporting Pivot
            </a>
          </div>
        </div>
        <PivotExportCdn></PivotExportCdn>
      </section>
    );
  })
  .add("Set Data", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>You can load inline data into Pivot after initialization via the setData method</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotSetDataCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#loadinginlinedata"
              target="_blank"
            >
              Loading Inline Data
            </a>
          </div>
        </div>
        <PivotSetDataCdn></PivotSetDataCdn>
      </section>
    );
  })
  .add("Structure reload", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Structure reload</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotStructureReloadCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/api__pivot_setfields.html"
              target="_blank"
            >
              SetFields.
            </a>
            <a
              href="https://docs.dhtmlx.com/pivot/api__pivot_setdata.html"
              target="_blank"
            >
              SetData
            </a>
          </div>
        </div>
        <PivotStructureReloadCdn></PivotStructureReloadCdn>
      </section>
    );
  })
  .add("Custom mark", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>You can specify your own function that will define the logic of applying styles to cells with certain values</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotCustomMarkCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__customization.html#conditionalformattingofcells"
              target="_blank"
            >
              Conditional Formatting of Cells.
            </a>
            <a
              href="https://docs.dhtmlx.com/pivot/api__pivot_mark_config.html"
              target="_blank"
            >
              Mark
            </a>
          </div>
        </div>
        <PivotCustomMarkCdn></PivotCustomMarkCdn>
      </section>
    );
  })
  .add("Custom formatting", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>It is possible to set custom format for values of cells</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotCustomFormattingCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__customization.html#customformatforcells"
              target="_blank"
            >
              Custom Format for Cells.
            </a>
            <a
              href="https://docs.dhtmlx.com/pivot/api__pivot_customformat_config.html"
              target="_blank"
            >
              CustomFormat
            </a>
          </div>
        </div>
        <PivotCustomFormattingCdn></PivotCustomFormattingCdn>
      </section>
    );
  })
  .add("Footer", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>You can specify a footer row for the grid of pivot to show a total result of the operation set for a column</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotFooterCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/guides__configuration.html#totaloperationpercolumn"
              target="_blank"
            >
              Total Operation per Column
            </a>
          </div>
        </div>
        <PivotFooterCdn></PivotFooterCdn>
      </section>
    );
  })
  .add("Pivot events", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Pivot events</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotEventsCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/api__refs__pivot_events.html"
              target="_blank"
            >
              Events
            </a>
          </div>
        </div>
        <PivotEventsCdn></PivotEventsCdn>
      </section>
    );
  })
  .add("Grid events", () => {
    return (
      <section className="dhx-container">
        <div className="dhx-container_header">
          <h3>Grid events</h3>
          <a
            className="source-link"
            href="https://github.com/DHTMLX/react-pivot-demo/blob/master/src/components/pivot/PivotGridEventsCdn.js"
            target="_blank"
          >
            Source code
          </a>
          <div>
            Check documentation:
            <a
              href="https://docs.dhtmlx.com/pivot/api__refs__grid_events.html"
              target="_blank"
            >
              Grid Events
            </a>
          </div>
        </div>
        <PivotGridEventsCdn></PivotGridEventsCdn>
      </section>
    );
  })
