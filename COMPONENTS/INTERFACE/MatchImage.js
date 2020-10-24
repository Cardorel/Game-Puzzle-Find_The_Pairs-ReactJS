export const ImagesMatched = (
  firstImage,
  secondImage,
  dispatchScore,
  firstImgIndex,
  secondImgIndex,
  ImagesSelector
) => {
  firstImage.classList.add("hidden");
  firstImage.classList.remove('blockFirstImg');
  secondImage.classList.add("hidden");
  ImagesSelector[firstImgIndex].classList.add("hidden");
  ImagesSelector[firstImgIndex].classList.remove("blockFirstImg");
  ImagesSelector[secondImgIndex].classList.add("hidden");
  dispatchScore();
};
