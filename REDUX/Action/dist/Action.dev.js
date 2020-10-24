"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetTheGameAction = exports.ResetScoreAction = exports.ScoreAction = exports.ResetQuantityTriedAction = exports.QuantityTriedAction = exports.ImageAction = exports.SizeAction = void 0;

var _Types = require("../Types");

var SizeAction = function SizeAction(size) {
  return function (dispatch) {
    return dispatch({
      type: _Types.GET_SIZE,
      payload: size
    });
  };
}; //Get


exports.SizeAction = SizeAction;

var ImageAction = function ImageAction(images) {
  return function (dispatch) {
    return dispatch({
      type: _Types.FETCH_IMAGE,
      payload: images
    });
  };
}; //Quantity Action


exports.ImageAction = ImageAction;

var QuantityTriedAction = function QuantityTriedAction() {
  return function (dispatch) {
    return dispatch({
      type: _Types.QUANTITY_TRIED
    });
  };
}; //Reset quantity


exports.QuantityTriedAction = QuantityTriedAction;

var ResetQuantityTriedAction = function ResetQuantityTriedAction() {
  return function (dispatch) {
    dispatch({
      type: _Types.RESETQUANTITY
    });
  };
}; //Score Action


exports.ResetQuantityTriedAction = ResetQuantityTriedAction;

var ScoreAction = function ScoreAction() {
  return function (dispatch) {
    return dispatch({
      type: _Types.SCORE
    });
  };
}; //Reset action


exports.ScoreAction = ScoreAction;

var ResetScoreAction = function ResetScoreAction() {
  return function (dispatch) {
    dispatch({
      type: _Types.RESETSCORE
    });
  };
}; //reset thee game action.


exports.ResetScoreAction = ResetScoreAction;

var ResetTheGameAction = function ResetTheGameAction(b) {
  return function (dispatch) {
    dispatch({
      type: _Types.RESETTHEGAME,
      payload: b
    });
  };
};

exports.ResetTheGameAction = ResetTheGameAction;