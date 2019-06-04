/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */import{LitElement,html,css}from"./node_modules/lit-element/lit-element.js";/**
 * `sakai-rubric`
 * `rubrics`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */class SakaiRubric extends LitElement{// render function
render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>`}// properties available to the custom element for data binding
static get properties(){let props={};if(super.properties){props=Object.assign(props,super.properties)}return props}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */tag(){return"sakai-rubric"}/**
   * Register CSS styles
   */static get styles(){return css`
    :host {
      display: block;
    }
  `}// life cycle
constructor(){super()}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback()}/**
   * life cycle, element removed from DOM
   */disconnectedCallback(){super.disconnectedCallback()}// attributeChangedCallback(attr, oldValue, newValue) {}
}customElements.define("sakai-rubric",SakaiRubric);export{SakaiRubric};