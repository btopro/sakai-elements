define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SakaiRubric=void 0;function _templateObject2_0391ed80871c11e99e4e016ecc23c3c1(){var data=babelHelpers.taggedTemplateLiteral(["\n    :host {\n      display: block;\n    }\n  "]);_templateObject2_0391ed80871c11e99e4e016ecc23c3c1=function _templateObject2_0391ed80871c11e99e4e016ecc23c3c1(){return data};return data}function _templateObject_0391ed80871c11e99e4e016ecc23c3c1(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_0391ed80871c11e99e4e016ecc23c3c1=function _templateObject_0391ed80871c11e99e4e016ecc23c3c1(){return data};return data}/**
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
 */var SakaiRubric=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(SakaiRubric,_LitElement);babelHelpers.createClass(SakaiRubric,[{key:"render",// render function
value:function render(){return(0,_litElement.html)(_templateObject_0391ed80871c11e99e4e016ecc23c3c1())}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"sakai-rubric"}/**
   * Register CSS styles
   */}],[{key:"properties",get:function get(){var props={};if(babelHelpers.get(babelHelpers.getPrototypeOf(SakaiRubric),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(SakaiRubric),"properties",this))}return props}},{key:"styles",get:function get(){return(0,_litElement.css)(_templateObject2_0391ed80871c11e99e4e016ecc23c3c1())}// life cycle
}]);function SakaiRubric(){babelHelpers.classCallCheck(this,SakaiRubric);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SakaiRubric).call(this))}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(SakaiRubric,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SakaiRubric.prototype),"connectedCallback",this).call(this)}/**
   * life cycle, element removed from DOM
   */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SakaiRubric.prototype),"disconnectedCallback",this).call(this)}// attributeChangedCallback(attr, oldValue, newValue) {}
}]);return SakaiRubric}(_litElement.LitElement);_exports.SakaiRubric=SakaiRubric;customElements.define("sakai-rubric",SakaiRubric)});