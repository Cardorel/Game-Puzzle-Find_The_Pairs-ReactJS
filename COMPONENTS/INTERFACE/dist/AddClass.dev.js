"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddClassVisible = void 0;

var AddClassVisible = function AddClassVisible(ImagesSelector) {
  ImagesSelector.forEach(function (img) {
    img.classList.add("ShowImage");
  });
};

exports.AddClassVisible = AddClassVisible;