"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveClassHidden = void 0;

var RemoveClassHidden = function RemoveClassHidden(ImagesSelector) {
  ImagesSelector.forEach(function (img) {
    img.classList.remove('hidden');
  });
};

exports.RemoveClassHidden = RemoveClassHidden;