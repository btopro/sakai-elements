import { SakaiElement } from "./sakai-element.js";
import { html } from "lit-element/lit-element.js";

export class SakaiRubricModifiedDate extends SakaiElement {
  constructor() {
    super();

    this.modified = "";
  }

  static get properties() {
    return { modified: String };
  }

  render() {
    if (moment(this.modified).isValid()) {
      let formatted = moment(this.modified)
        .locale(portal.locale)
        .format("LLLL");
      return html`
        ${formatted}
      `;
    } else {
      return html`
        ${this.modified}
      `;
    }
  }
}

customElements.define("modified-date", SakaiRubricModifiedDate);
