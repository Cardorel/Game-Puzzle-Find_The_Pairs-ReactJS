"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContentDiv = exports.Image = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 110px;\nborder-radius: 8px;\nmargin: 0 4px 8px 4px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nposition: relative;\n\n&.blockFirstImg{\n    pointer-events: none;\n    img{\n        pointer-events: none;\n    }\n}\n\n&.hidden{\n    pointer-events: none;\n    visibility: hidden;\n    cursor: none;\n    img{\n        pointer-events: none;\n        visibility: hidden;\n        cursor: none;\n        transition: opacity all 0.35ms\n    }\n}\n\n&.ShowImage{\n    background-color: #0078D7;\n    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n     box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n    &::before{\n        content: \"?\";\n        position: absolute;\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 19px;\n        font-weight: bold;\n    }\n    img{\n        opacity: 0;\n        transition: opacity all 0.35ms\n    }\n}\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmax-width: 110px;\nheight: 132.5px;\nobject-fit: cover;\ncursor: pointer;\nborder-radius: 8px;\nopacity: 1;\ntransition: opacity all 0.35ms;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents["default"].img(_templateObject());

exports.Image = Image;

var ImageContentDiv = _styledComponents["default"].div(_templateObject2());

exports.ImageContentDiv = ImageContentDiv;