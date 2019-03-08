import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-flex-layout/iron-flex-layout";
import "../simple-material-table";

class DemoSimple extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        div.whole {
          width: 100%;
        }
      </style>
      <div class="whole">
        <simple-material-table
          id="demo"
          title="Test Table"
          columns="[[columns]]"
          table-data="[[_tableData]]"
          on-row-selected="_onRowSelected"
          on-action-add="_onActionAdd"
          on-action-edit="_onActionEdit"
          on-action-delete="_onActionDelete"
          show-action-add
          show-action-edit
          show-action-delete
        >
        </simple-material-table>
      </div>
    `;
  }

  static get is() {
    return "demo-simple";
  }

  _onRowSelected(data) {
    console.log("_onRowSelected", data);
  }

  _onActionAdd() {
    console.log("_onActionAdd");
    this.push("_tableData", {
      sensor: "X",
      value: this._tableData.length,
      rawValue: this._tableData.length
    });
  }

  _onActionEdit(data) {
    console.log("_onActionEdit", data);
  }

  _onActionDelete(data) {
    console.log("_onActionDelete", data);
  }

  constructor() {
    super();
    this.columns = [
      {
        title: "Sensor",
        number: false,
        column: "sensor",
        hidden: false
      },
      {
        title: "Value",
        number: true,
        column: "value",
        formatter: function(value) {
          return parseFloat(value).toFixed(2);
        },
        hidden: false
      },
      {
        title: "Raw Value",
        number: true,
        column: "rawValue",
        formatter: function(value) {
          return parseFloat(value).toFixed(0);
        },
        hidden: true
      }
    ];

    this._tableData = [
      {
        sensor: "T",
        value: 3.437,
        rawValue: "3437"
      },
      {
        sensor: "H",
        value: 86.5,
        rawValue: "8650"
      },
      {
        sensor: "V",
        value: 3.309,
        rawValue: "3309"
      },
      {
        sensor: "B",
        value: 1020.26,
        rawValue: "102026"
      },
      {
        sensor: "L",
        value: 2,
        rawValue: "2"
      },
      {
        sensor: "R",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "S",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "G",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "A",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "T",
        value: 3.437,
        rawValue: "3437"
      },
      {
        sensor: "H",
        value: 86.9,
        rawValue: "8690"
      },
      {
        sensor: "V",
        value: 3.309,
        rawValue: "3309"
      },
      {
        sensor: "B",
        value: 1020.18,
        rawValue: "102018"
      },
      {
        sensor: "L",
        value: 2,
        rawValue: "2"
      },
      {
        sensor: "R",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "S",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "G",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "A",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "T",
        value: 3.5,
        rawValue: "3500"
      },
      {
        sensor: "H",
        value: 86.4,
        rawValue: "8640"
      },
      {
        sensor: "V",
        value: 3.309,
        rawValue: "3309"
      },
      {
        sensor: "B",
        value: 1020.21,
        rawValue: "102021"
      },
      {
        sensor: "L",
        value: 2,
        rawValue: "2"
      },
      {
        sensor: "R",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "S",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "G",
        value: 0,
        rawValue: "0"
      },
      {
        sensor: "A",
        value: 0,
        rawValue: "0"
      }
    ];

    window.setInterval(
      function() {
        for (var i = 0; i < this._tableData.length; i++) {
          this.set(["_tableData", i, "value"], this._tableData[i].value + 0.1);
        }
      }.bind(this),
      1000
    );
  }
}
window.customElements.define(DemoSimple.is, DemoSimple);
