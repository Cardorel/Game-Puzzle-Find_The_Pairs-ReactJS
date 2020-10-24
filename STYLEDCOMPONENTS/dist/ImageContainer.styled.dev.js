"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 70%;\ndisplay: flex;\nflex: 3;\nflex-wrap: wrap;\ngap: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageContainer = _styledComponents["default"].div(_templateObject());

exports.ImageContainer = ImageContainer;