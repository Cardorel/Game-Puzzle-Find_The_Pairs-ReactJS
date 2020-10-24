"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagesUnMatch = void 0;

var ImagesUnMatch = function ImagesUnMatch(ImagesSelector, dispatchQuantity, firstImgIndex, secondImgIndex) {
  if (firstImgIndex != secondImgIndex) {
    ImagesSelector[firstImgIndex].classList.add("ShowImage");
    ImagesSelector[secondImgIndex].classList.add("ShowImage");
    ImagesSelector[firstImgIndex].classList.remove("blockFirstImg");
    dispatchQuantity();
  }

  return;
};

exports.ImagesUnMatch = ImagesUnMatch;