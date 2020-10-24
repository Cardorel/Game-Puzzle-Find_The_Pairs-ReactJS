"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffleImage = void 0;

var shuffleImage = function shuffleImage(ImagesSelector) {
  for (var i = ImagesSelector.length - 1; i > 0; i--) {
    var random = Math.floor(Math.random() * (i + 1));
    ImagesSelector[random].style.order = i;
    ImagesSelector[i].style.order = random;
  }
};

exports.shuffleImage = shuffleImage;