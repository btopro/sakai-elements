/**
 * Copyright 2019 Gotham University
 * @license Apache-2.0, see License.md for full text.
 */
import { SakaiElement } from "./sakai-element.js";
import { html } from "lit-element/lit-element.js";
/**
 * `sakai-rubric-site-title`
 *
 * @microcopy - language worth noting:
 *  - This element assumes an end point in `baseapiurl`
 *
 * @customElement
 * @litElement
 * @SakaiElement
 * @demo demo/index.html
 */
export class SakaiRubricSiteTitle extends SakaiElement {
  constructor() {
    super();
    this.baseapiurl = "/";
    this.siteId = "";
    this.siteTitle = "";
  }

  static get properties() {
    return {
      siteId: { attribute: "site-id", type: String },
      siteTitle: { attribute: true, type: String }
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if ("site-id" === name) {
      this.setSiteTitle();
    }
  }

  render() {
    return html`
      ${this.siteTitle}
    `;
  }

  setSiteTitle() {
    var self = this;
    jQuery
      .ajax({
        url:
          this.baseapiurl +
          "sakai-ws/rest/sakai/getSiteTitle?sessionid=" +
          sakaiSessionId +
          "&siteid=" +
          this.siteId
      })
      .done(function(response) {
        self.siteTitle = response;
      })
      .fail(function() {
        self.siteTitle = self.siteId;
      });
  }
}

customElements.define("site-title", SakaiRubricSiteTitle);
