"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOption = exports.SelectContainer = exports.ParagraphSize = exports.Button = exports.Paragraph = exports.FontWeight = exports.LevelSpan = exports.ScoreSpan = exports.ScoreContainer = exports.ChooseContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nwidth: 90px;\nheight: 20px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["  \ndisplay: flex;\nmargin: 8px 0;\nalign-items: center;\npadding: 15px 0px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nmargin: 0 8px 0 0;\nfont-weight: bold;\nmargin-bottom: 0 !important;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["  \npadding: 8px 15px;\ncolor: white;\noutline: none;\nbackground-color: #0078D7;\nfont-size: 16px;\ncursor: pointer;\nborder-radius: 3px;\nborder: none;"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nmargin: 15px 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nfont-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n", "\ncolor: #0078D7;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-size: 21px;\nfont-weight: bolder;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 40%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["  \nbackground-color: white;\nwidth: 100%;\nflex: 1;\nheight: 100%;\npadding: 10px 10px;\nborder-radius: 3px;\nmargin: 0 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ChooseContainer = _styledComponents["default"].div(_templateObject());

exports.ChooseContainer = ChooseContainer;

var ScoreContainer = _styledComponents["default"].div(_templateObject2());

exports.ScoreContainer = ScoreContainer;
var Span = (0, _styledComponents.css)(_templateObject3());

var ScoreSpan = _styledComponents["default"].span(_templateObject4(), Span);

exports.ScoreSpan = ScoreSpan;

var LevelSpan = _styledComponents["default"].span(_templateObject5(), Span);

exports.LevelSpan = LevelSpan;

var FontWeight = _styledComponents["default"].span(_templateObject6());

exports.FontWeight = FontWeight;

var Paragraph = _styledComponents["default"].p(_templateObject7());

exports.Paragraph = Paragraph;

var Button = _styledComponents["default"].button(_templateObject8());

exports.Button = Button;

var ParagraphSize = _styledComponents["default"].p(_templateObject9());

exports.ParagraphSize = ParagraphSize;

var SelectContainer = _styledComponents["default"].div(_templateObject10());

exports.SelectContainer = SelectContainer;

var SelectOption = _styledComponents["default"].select(_templateObject11());

exports.SelectOption = SelectOption;